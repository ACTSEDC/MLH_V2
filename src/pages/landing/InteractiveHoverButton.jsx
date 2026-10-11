import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * InteractiveHoverButton
 *
 * Adapted for Hacktoberfest 2026 retro aesthetic:
 * - Coral-red/salmon base background (#E97B77)
 * - Dark uppercase bold typography with dark outline border (#231F20)
 * - Hard offset shadow (4px 4px 0 #231F20)
 * - Expanding circle in dark sage green (#2c4741)
 * - Warm off-white hover text and arrow (#F2F2EB)
 * - Supports both <button> and <a> link semantics through asChild or href
 */
export const InteractiveHoverButton = React.forwardRef(
  function InteractiveHoverButton(
    {
      children,
      text = "REGISTER NOW",
      className,
      as: Component = "button",
      href,
      target,
      rel,
      ...props
    },
    ref,
  ) {
    const Tag = href ? "a" : Component;
    const content = children || text;

    return (
      <Tag
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        className={[
          "interactive-hover-btn-root",
          className,
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {/* Button content matching Figma reference without overlapping dot */}
        <span className="interactive-hover-btn-content">
          <span className="interactive-hover-btn-text">
            {content}
          </span>
          <span className="interactive-hover-btn-badge">
            <ArrowRight className="interactive-hover-btn-arrow" />
          </span>
        </span>
      </Tag>
    );
  },
);

export default InteractiveHoverButton;
