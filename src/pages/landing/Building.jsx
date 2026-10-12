import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { rise } from "./heroMotion";

const SRC = "/USAR.svg";

/** Finds the real edges of the drawing by scanning for non-transparent pixels. */
function useContentBox(src) {
  const [state, setState] = useState({ status: "pending", box: null });

  useEffect(() => {
    let cancelled = false;
    const img = new Image();

    img.onload = () => {
      try {
        const nw = img.naturalWidth || 1870;
        const nh = img.naturalHeight || 841;
        const cw = 1200;
        const ch = Math.max(1, Math.round((cw * nh) / nw));

        const canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, cw, ch);
        const { data } = ctx.getImageData(0, 0, cw, ch);

        let top = ch,
          bottom = -1,
          left = cw,
          right = -1;
        for (let y = 0; y < ch; y++) {
          for (let x = 0; x < cw; x++) {
            if (data[(y * cw + x) * 4 + 3] > 8) {
              if (y < top) top = y;
              if (y > bottom) bottom = y;
              if (x < left) left = x;
              if (x > right) right = x;
            }
          }
        }
        if (bottom < 0) throw new Error("empty image");
        bottom += 1;
        right += 1;

        if (!cancelled) {
          setState({
            status: "ready",
            box: {
              x: left / cw,
              y: top / ch,
              w: (right - left) / cw,
              h: (bottom - top) / ch,
              ratio: (right - left) / (bottom - top),
              natRatio: cw / ch,
            },
          });
        }
      } catch {
        if (!cancelled) setState({ status: "failed", box: null });
      }
    };
    img.onerror = () => {
      if (!cancelled) setState({ status: "failed", box: null });
    };
    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src]);

  return state;
}

export default function Building() {
  const { status, box } = useContentBox(SRC);
  const ready = status !== "pending";

  const frameStyle = box ? { "--ratio": box.ratio } : undefined;
  const imgStyle = box
    ? {
        width: `${100 / box.w}%`,
        left: `${-(box.x / box.w) * 100}%`,
        top: `${-(box.y / box.h) * 100}%`,
        height: "auto",
        aspectRatio: box.natRatio,
      }
    : undefined;

  return (
    <div className="building-wrap">
      {/* waits until the drawing is measured, then rises from the bottom edge */}
      <motion.div
        className={`building${status === "failed" ? " building--plain" : ""}`}
        style={frameStyle}
        variants={rise(0.2)}
        initial="hidden"
        animate={ready ? "visible" : "hidden"}
      >
        <img
          src={SRC}
          style={imgStyle}
          alt="University School of Automation and Robotics building"
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
