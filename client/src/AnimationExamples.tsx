import { useState } from "react";
import "./App.css";

export function AnimationExamples() {
  return (
    <>
      <svg width="600" height="600" style={{ border: "1px solid black" }}>
        <polygon points="60,30 90,90 30,90">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 70"
            to="360 60 70"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
        <rect x="100" width="100" height="100">
          <animate
            attributeName="rx"
            values="0;50;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <g transform="translate(0,100)">
          <path
            fill="none"
            stroke="lightgrey"
            d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          />

          <circle r="5" fill="red">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
            />
          </circle>
        </g>
      </svg>
    </>
  );
}
