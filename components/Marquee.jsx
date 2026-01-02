"use client";
import React, { useMemo } from "react";

/**
 * Marquee אינסופי ללא רווחים:
 * - מכפיל את התוכן פעמיים (A + A) כדי לאפשר גלילה חלקה.
 * - speedSeconds = כמה זמן ל״סיבוב״ אחד (0→-50%).
 */
export default function Marquee({
  speedSeconds = 30,
  className = "",
  children,
}) {
  // כדי למנוע רינדור מיותר של children פעמיים בכל פריים:
  const duplicated = useMemo(
    () => (
      <>
        <div className="marquee__row">{children}</div>
        <div className="marquee__row">{children}</div>
      </>
    ),
    [children]
  );

  return (
    <div className={`marquee ${className}`}>
      <div
        className="marquee__track"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {duplicated}
      </div>
    </div>
  );
}
