// ============================================================
// SCRIBBLES.JSX — Drop these into your Services section
// Each is a standalone component. Import and place as needed.
// ============================================================

import React from "react";

// ─────────────────────────────────────────────────────────────
// 1. WAVY UNDERLINE
// Place directly beneath your "Our Services" heading text.
//
// Usage:
//   <h2>Our Services</h2>
//   <WavyUnderline />
// ─────────────────────────────────────────────────────────────
export const WavyUnderline = ({ width = 320, color = "#9b59f5", secondColor = "#6c3fc5" }) => (
  <svg
    width={width}
    height="18"
    viewBox={`0 0 ${width} 18`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", marginTop: "-4px" }}
  >
    {/* Primary wave */}
    <path
      d={`
        M4 8
        C ${width * 0.1} 3,  ${width * 0.18} 13, ${width * 0.27} 8
        C ${width * 0.36} 3,  ${width * 0.44} 13, ${width * 0.53} 8
        C ${width * 0.62} 3,  ${width * 0.7}  13, ${width * 0.79} 8
        C ${width * 0.88} 3,  ${width * 0.95} 11, ${width - 4} 8
      `}
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Secondary shadow wave — slightly offset */}
    <path
      d={`
        M12 13
        C ${width * 0.12} 9,  ${width * 0.2}  17, ${width * 0.3}  13
        C ${width * 0.4}  9,  ${width * 0.48} 17, ${width * 0.57} 13
        C ${width * 0.67} 9,  ${width * 0.75} 17, ${width * 0.84} 13
        C ${width * 0.92} 9,  ${width * 0.97} 15, ${width - 12}   13
      `}
      stroke={secondColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);


// ─────────────────────────────────────────────────────────────
// 1.1 CURLY UNDERLINE
// ─────────────────────────────────────────────────────────────
export const CurlyUnderline = ({ width = 120, color = "#c084fc" }) => (
  <svg
    width={width}
    height="12"
    viewBox={`0 0 120 12`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", marginTop: "2px" }}
  >
    <path
      d="M2 10C15 10 20 2 35 2C50 2 55 10 70 10C85 10 90 2 105 2C115 2 118 6 118 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);


// ─────────────────────────────────────────────────────────────
// 2. ROUGH CIRCLE ON CARD NUMBERS
// Wraps around the "01", "02" etc numbers on service cards.
//
// Usage:
//   <RoughCircleNumber number="01" />
//   <RoughCircleNumber number="02" />
// ─────────────────────────────────────────────────────────────
export const RoughCircleNumber = ({
  number = "01",
  size = 64,
  circleColor = "#9b59f5",
  numberColor = "#c084fc",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rough hand-drawn circle — slightly imperfect path for organic feel */}
    <path
      d="
        M32 6
        C42 4, 54 10, 58 20
        C63 31, 60 45, 52 53
        C44 61, 30 65, 18 60
        C6  55, 1  42, 3  30
        C5  18, 14 7,  26 5
        C28 4.5, 30 5, 32 6
      "
      stroke={circleColor}
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.85"
    />
    {/* Second lighter loop for sketch texture */}
    <path
      d="
        M34 8
        C44 7, 55 14, 57 25
        C59 36, 54 50, 44 56
        C34 62, 20 60, 12 52
        C4  44, 3  30, 8  20
        C13 10, 23 6,  32 6
      "
      stroke={circleColor}
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.3"
    />
    {/* Number text */}
    <text
      x="32"
      y="39"
      textAnchor="middle"
      fill={numberColor}
      fontSize="19"
      fontWeight="700"
      fontFamily="'Space Grotesk', monospace"
      letterSpacing="1"
    >
      {number}
    </text>
  </svg>
);


// ─────────────────────────────────────────────────────────────
// 3. "AND MORE →" ANNOTATION
// Place after your last visible service card, floating below
// or in the corner. Feels like a handwritten note.
//
// Usage:
//   <AndMoreAnnotation />
// ─────────────────────────────────────────────────────────────
export const AndMoreAnnotation = ({
  text = "and more",
  color = "#9b59f5",
  arrowColor = "#c084fc",
}) => (
  <svg
    width="160"
    height="52"
    viewBox="0 0 160 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    {/* Handwritten-style italic text rendered as SVG text */}
    <text
      x="8"
      y="22"
      fill={color}
      fontSize="22"
      fontStyle="italic"
      fontWeight="400"
      fontFamily="'Dancing Script', 'Pacifico', cursive"
      letterSpacing="0.5"
    >
      {text}
    </text>

    {/* Sketchy arrow after the text - shifted up */}
    <path
      d="M108 18 C116 18, 124 17, 133 17"
      stroke={arrowColor}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Arrow head — shifted up */}
    <path
      d="M128 12 Q 133 17, 128 22"
      stroke={arrowColor}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Tiny second arrowhead - shifted up */}
    <path
      d="M126 13.5 Q 130 17, 127 21"
      stroke={arrowColor}
      strokeWidth="0.7"
      strokeLinecap="round"
      opacity="0.4"
    />

    {/* Squiggly underline beneath the text - shifted up */}
    <path
      d="
        M8  32
        C18 28, 26 36, 36 32
        C46 28, 54 36, 64 32
        C74 28, 82 36, 92 32
        C100 28, 106 34, 106 32
      "
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// 3b. GENERIC SKETCHY CIRCLE
// A simple rough oval to wrap around text hints.
// ─────────────────────────────────────────────────────────────
export const SketchyCircle = ({
  color = "#9b59f5",
  width = 160,
  height = 40,
  opacity = 0.6,
  className = ""
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="10 1 150 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      zIndex: -1
    }}
  >
    <path
      d="M10,20 C10,5 150,5 150,20 C150,35 10,35 10,20 Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity={opacity}
      style={{
        strokeDasharray: "400",
        strokeDashoffset: "0",
      }}
    />
    <path
      d="M15,22 C30,8 140,8 145,22 C150,36 20,36 15,22"
      stroke={color}
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity={opacity * 0.5}
    />
  </svg>
);


// ─────────────────────────────────────────────────────────────
// 4. BRACKET ANNOTATION  { design + code }
// Place near the Services heading or between card groups.
// Communicates your unique design + dev angle.
//
// Usage:
//   <BracketAnnotation label="design + code" />
//   <BracketAnnotation label="creativity + logic" />
// ─────────────────────────────────────────────────────────────
export const BracketAnnotation = ({
  label = "design + code",
  bracketColor = "#9b59f5",
  textColor = "#c084fc",
  secondTextColor = "#6c3fc5",
  fontSize = 13,
}) => {
  const lines = label.split("+").map((s) => s.trim());
  // Scale the SVG width/height based on fontSize ratio
  const scale = fontSize / 13;
  const svgW = Math.round(210 * scale);
  const svgH = Math.round(72 * scale);

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox="0 0 210 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left curly bracket — rough path */}
      <path
        d="
          M38 8
          C28 8, 24 14, 24 22
          C24 30, 18 33, 18 36
          C18 39, 24 42, 24 50
          C24 58, 28 64, 38 64
        "
        stroke={bracketColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left bracket inner shadow for sketch texture */}
      <path
        d="
          M36 10
          C26 10, 23 16, 23 23
          C23 30, 17 34, 17 36
          C17 38, 23 42, 23 50
          C23 57, 27 63, 36 63
        "
        stroke={bracketColor}
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />

      {/* Right curly bracket — mirrored rough path */}
      <path
        d="
          M172 8
          C182 8, 186 14, 186 22
          C186 30, 192 33, 192 36
          C192 39, 186 42, 186 50
          C186 58, 182 64, 172 64
        "
        stroke={bracketColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="
          M174 10
          C184 10, 187 16, 187 23
          C187 30, 193 34, 193 36
          C193 38, 187 42, 187 50
          C187 57, 183 63, 174 63
        "
        stroke={bracketColor}
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />

      {/* Label text — split across two lines at "+" */}
      {lines.length === 2 ? (
        <>
          <text
            x="105"
            y="26"
            textAnchor="middle"
            fill={textColor}
            fontSize={fontSize}
            fontStyle="italic"
            fontFamily="'Space Grotesk', 'Dancing Script', cursive"
            letterSpacing="0.5"
          >
            {lines[0]}
          </text>
          {/* Plus separator (sparkle) — slightly bigger than text */}
          <text
            x="105"
            y="43"
            textAnchor="middle"
            fill={secondTextColor}
            fontSize={fontSize}
            fontFamily="monospace"
            opacity="0.85"
          >
            ✦
          </text>
          <text
            x="105"
            y="58"
            textAnchor="middle"
            fill={textColor}
            fontSize={fontSize}
            fontStyle="italic"
            fontFamily="'Space Grotesk', 'Dancing Script', cursive"
            letterSpacing="0.5"
          >
            {lines[1]}
          </text>
        </>
      ) : (
        <text
          x="105"
          y="40"
          textAnchor="middle"
          fill={textColor}
          fontSize={fontSize}
          fontStyle="italic"
          fontFamily="'Space Grotesk', 'Dancing Script', cursive"
        >
          {label}
        </text>
      )}
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────
// 5. HELLO ROUGH CIRCLE
// A friendly, hand-drawn circle to say "Hello" or wrap around a portrait.
//
// Usage:
//   <HelloRoughCircle />
// ─────────────────────────────────────────────────────────────
export const HelloRoughCircle = ({
  size = 120,
  color = "#9b59f5",
  textColor = "#c084fc",
}) => (
  <svg
    width={size * 1.2}
    height={size * 0.8}
    viewBox="0 0 140 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", top: "-80px", left: "-25px", zIndex: 1, pointerEvents: "none" }}
  >
    {/* Rough oval path with crossing ends */}
    <path
      d="
        M 30,60
        C 15,20 100,10 115,40
        C 130,70 95,95 50,85
        C 10,75 15,30 75,25
      "
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// 6. SCRIBBLE ARROW
// A reusable hand-drawn arrow SVG
// ─────────────────────────────────────────────────────────────
export const ScribbleArrow = ({ width = "60", height = "40", color = "#ffffff", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M 60,50 C 70,30, 40,20, 20,10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 30,5 C 25,5, 20,10, 20,10 C 25,18, 30,20, 30,20"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// 7. YEARS EXP ANNOTATION
// A hand-drawn annotation pointing to years of experience.
// ─────────────────────────────────────────────────────────────
export const YrsExpAnnotation = ({
  years = "3+",
  color = "#9b59f5",
  textColor = "#f0f0ff"
}) => (
  <div
    style={{
      position: "absolute",
      right: "-40px",
      top: "-60px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      pointerEvents: "none",
      zIndex: 10
    }}
  >
    <ScribbleArrow color="#ffffff" style={{ marginBottom: "-10px", marginLeft: "-40px", zIndex: 0 }} />

    {/* Glassmorphic Box */}
    <div
      style={{
        background: "rgba(108, 63, 197, 0.15)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(155, 89, 245, 0.3)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        borderRadius: "12px",
        padding: "12px 16px",
        color: textColor,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "14px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        transform: "rotate(4deg)",
        zIndex: 1
      }}
    >
      <span style={{ color: color, fontSize: "18px", fontWeight: "700" }}>{years}</span> years of exp
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// 7. BASED IN PILL
// A sketchy pill shape enclosing the location.
//
// Usage:
//   <BasedInPill location="islamabad" />
// ─────────────────────────────────────────────────────────────
export const BasedInPill = ({
  location = "islamabad",
  text,
  color = "#9b59f5",
  textColor = "#f0f0ff",
  fontSize = "14px",
  padding = "10px 18px",
  className = "",
  style = {}
}) => (
  <div
    className={`based-in-pill ${className}`}
    style={{
      background: "rgba(108, 63, 197, 0.15)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      border: "1px solid rgba(155, 89, 245, 0.3)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      borderRadius: "16px",
      padding: padding,
      color: textColor,
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: fontSize,
      fontWeight: "500",
      letterSpacing: "0.5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      pointerEvents: "none",
      whiteSpace: "normal",
      textAlign: "center",
      maxWidth: "100%",
      lineHeight: "1.4",
      zIndex: 10,
      ...style
    }}
  >
    <div
      style={{
        width: "6px",
        height: "6px",
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0 0 8px ${color}`
      }}
    ></div>
    {text || `based in ${location}`}
  </div>
);