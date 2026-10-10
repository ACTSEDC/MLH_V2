import "./RegisterCTA.css";
import defaultArt from "./assets/cta-art.webp";
import defaultQr from "./assets/qr.png";

/**
 * "Ready to build something unforgettable?" section (page 8).
 *
 * Optional props:
 *   qrSrc  - replace the QR image (defaults to ./assets/qr.png)
 *   artSrc - replace the illustration (defaults to ./assets/cta-art.webp)
 */
export default function RegisterCTA({ qrSrc = defaultQr, artSrc = defaultArt }) {
  return (
    <section className="register-cta" id="register">
      <div className="register-cta__inner">
        <div className="register-cta__content">
          <div className="register-cta__swatches" aria-hidden="true">
            <span style={{ background: "#E53927" }} />
            <span style={{ background: "#8BB2DE" }} />
            <span style={{ background: "#F5B726" }} />
            <span style={{ background: "#E97B77" }} />
          </div>

          <h2 className="register-cta__title">
            Ready to build something unforgettable?
          </h2>

          <div className="register-cta__text">
            <p className="register-cta__kicker">Many minds. Infinite possibilities.</p>
            <p className="register-cta__body">
              One gathering. Countless perspectives. A world of possibilities
              waiting to unfold
            </p>
          </div>

          <div className="register-cta__scan">
            <img className="register-cta__qr" src={qrSrc} alt="QR code to register" />
            <span className="register-cta__divider" aria-hidden="true" />
            <p className="register-cta__scan-label">
              Scan to
              <br />
              register !
            </p>
          </div>
        </div>

        <div className="register-cta__art">
          <img src={artSrc} alt="" />
        </div>
      </div>
    </section>
  );
}
