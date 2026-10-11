import React from "react";

/**
 * ActsLogoTransition
 *
 * Smoothly alternates between the two official ACTS logo badge variants:
 * - Variant A: Blue, cyan, and purple geometric accents
 * - Variant B: Yellow, dark green, and coral-red geometric accents
 *
 * Uses a pure CSS opacity crossfade on the compositor thread for 60fps performance.
 * Respects prefers-reduced-motion by remaining statically on Variant A.
 */
export function ActsLogoTransition({ className = "" }) {
  return (
    <div
      className={`acts-logo-transition-container ${className}`}
      aria-label="ACTS EDC logo"
      role="img"
    >
      {/* Base Layer: Blue/Purple/Cyan Variant */}
      <img
        src="/acts-logo-blue-purple.png"
        alt="ACTS EDC logo"
        className="acts-logo-layer acts-logo-base"
        draggable="false"
      />

      {/* Crossfade Layer: Yellow/Green/Coral Variant */}
      <img
        src="/acts-logo-yellow-green.png"
        alt=""
        aria-hidden="true"
        className="acts-logo-layer acts-logo-alt"
        draggable="false"
      />
    </div>
  );
}

export default ActsLogoTransition;
