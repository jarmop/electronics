import React from "react";
import "./App.css";

const width = 800;
const height = 600;
const copperColor = "#B87333";

export function SaltBridgeCell() {
  return (
    <>
      <svg
        // viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}
        width={width}
        height={height}
        style={{ border: "1px solid black" }}
      >
        <Cup x="100" />
        <Cup x="350" fill="blue" />
        <Cup x="350" fill="blue" />
        <path
          d="M 260,280 v-120 h130 v120"
          fill="none"
          stroke="lightgrey"
          strokeWidth={40}
        />
        <rect x="120" y="80" width={40} height={300} fill="grey" />
        <rect x="490" y="80" width={40} height={300} fill={copperColor} />
        <rect x="120" y="40" width={410} height={40} fill="black" />
        <foreignObject
          x="250"
          y="376"
          width="50"
          height="25"
        >
          <math>
            <msub>
              <mi>ZnSO</mi>
              <mn>4</mn>
            </msub>
          </math>
        </foreignObject>
        <foreignObject
          x="360"
          y="376"
          width="50"
          height="25"
          style={{ color: "white" }}
        >
          <math>
            <msub>
              <mi>CuSO</mi>
              <mn>4</mn>
            </msub>
          </math>
        </foreignObject>
        <ZnOxidization />
        <CopperReduction />
      </svg>
    </>
  );
}

function Cup({ x, fill = "lightblue" }: { x: string; fill?: string }) {
  return (
    <g>
      <rect x={x} y="220" width={200} height={180} fill={fill} />

      <path
        d={`M ${x},200 v200 h200 v-200`}
        fill="none"
        stroke="black"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </g>
  );
}

function Electrons(
  { x, y, svgAnimation }: {
    x: number;
    y: number;
    svgAnimation?: React.ReactNode;
  },
) {
  return (
    <g
      transform={`translate(${x},${y})`}
    >
      <circle r={14} fill="white" stroke="black"></circle>
      <foreignObject
        x={-8}
        y={-10}
        width="50"
        height="25"
      >
        <math
          style={{
            fontSize: 14,
            fontWeight: "bold",
            animationDuration: "10s",
          }}
        >
          <msup>
            <mi>2e</mi>
            <mi>-</mi>
          </msup>
        </math>
      </foreignObject>
      {svgAnimation}
    </g>
  );
}

function CopperAtom({ ref }: { ref: React.RefObject<SVGGElement | null> }) {
  return (
    <g
      transform="translate(510,340)"
      // onAnimationEnd={() => {
      //   console.log("CopperAtom animation ended");
      // }}
      ref={ref}
      style={{ fontSize: 14, fontWeight: "bold" }}
    >
      <circle r={14} fill={copperColor} stroke="black"></circle>
      <foreignObject
        x={-10}
        y={-9}
        width="50"
        height="25"
      >
        Cu
      </foreignObject>
    </g>
  );
}

function CopperIon(
  { x, y, cssAnimation }: {
    x: number;
    y: number;
    cssAnimation: React.CSSProperties;
  },
) {
  const domRef = React.useRef<SVGGElement>(null);

  React.useEffect(() => {
    console.log("tyj");
    if (domRef.current) {
      const keyframes = [
        { opacity: 1 }, // from
        { opacity: 0 }, // to
      ];
      const options = {
        duration: 2000,
        iterations: 1,
      };

      domRef.current.animate(keyframes, options);
    }
  });

  return (
    <g
      transform={`translate(510,340)`}
      ref={domRef}
    >
      <circle r={18} fill={copperColor} stroke="black"></circle>
      <foreignObject
        x={-14}
        y={-10}
        width="50"
        height="25"
      >
        <math
          style={{ fontSize: 14, fontWeight: "bold" }}
        >
          <msup>
            <mi>Cu</mi>
            <mi>2+</mi>
          </msup>
        </math>
      </foreignObject>
    </g>
  );
}

function ZnOxidization() {
  return (
    <Electrons
      x={140}
      y={340}
      svgAnimation={
        <animateMotion
          dur="8s"
          repeatCount="1"
          path="M0,0 v-280 h370 v280"
        />
      }
    />
  );
}

function CopperReduction() {
  const copperAtomRef = React.useRef<SVGGElement>(null);

  let initialized = false;

  React.useEffect(() => {
    if (!initialized && copperAtomRef.current) {
      const keyframes = [
        { opacity: 1 }, // from
        { opacity: 0 }, // to
      ];
      const options = {
        duration: 1500,
        iterations: 1,
      };

      const animation = copperAtomRef.current.animate(keyframes, options);

      animation.onfinish = () => {
        console.log("rth");
      };

      initialized = true;
    }
  });

  return (
    <>
      <CopperAtom ref={copperAtomRef} />
      <Electrons
        x={240}
        y={340}
        svgAnimation={
          <animateMotion
            dur="8s"
            repeatCount="1"
            path="M0,0 v-280 h370 v280"
          />
        }
      />
    </>
  );
}
