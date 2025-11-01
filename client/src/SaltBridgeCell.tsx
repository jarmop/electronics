import React from "react";
import "./App.css";

const width = 800;
const height = 600;
const copperColor = "#B87333";
const zincColor = "grey";

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
        <rect x="120" y="80" width={40} height={300} fill={zincColor} />
        <rect x="490" y="80" width={40} height={300} fill={copperColor} />
        <rect x="120" y="40" width={410} height={40} fill="black" />
        <foreignObject
          x="250"
          y="376"
          width="500"
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
        <Animation />
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
  { ref, x, y }: {
    x: number;
    y: number;
    ref: React.RefObject<SVGGElement | null>;
  },
) {
  return (
    <g
      ref={ref}
      transform={`translate(${x},${y})`}
      style={{ opacity: 0 }}
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
    </g>
  );
}

function CopperAtom(
  { x, y, ref }: {
    x: number;
    y: number;
    ref: React.RefObject<SVGGElement | null>;
  },
) {
  return (
    <g
      transform={`translate(${x},${y})`}
      ref={ref}
      style={{ fontSize: 14, fontWeight: "bold", opacity: 0 }}
    >
      <circle r={18} fill={copperColor} stroke="black"></circle>
      <text x={-10} y={4}>Cu</text>
    </g>
  );
}

function CopperIon(
  { x, y, ref }: {
    x: number;
    y: number;
    ref: React.RefObject<SVGGElement | null>;
  },
) {
  return (
    <g
      transform={`translate(${x},${y})`}
      style={{ opacity: 0 }}
      ref={ref}
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

function ZincIon(
  { x, y, ref }: {
    x: number;
    y: number;
    ref: React.RefObject<SVGGElement | null>;
  },
) {
  return (
    <g
      transform={`translate(${x},${y})`}
      style={{ opacity: 0 }}
      ref={ref}
    >
      <circle r={18} fill={zincColor} stroke="black"></circle>
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
            <mi>Zn</mi>
            <mi>2+</mi>
          </msup>
        </math>
      </foreignObject>
    </g>
  );
}

function SulfateIon(
  { x, y, ref }: {
    x: number;
    y: number;
    ref: React.RefObject<SVGForeignObjectElement | null>;
  },
) {
  return (
    <foreignObject
      transform={`translate(${x},${y})`}
      style={{ opacity: 0, color: "white" }}
      ref={ref}
      width="50"
      height="25"
    >
      <math
        style={{
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        <msubsup>
          <mi>SO</mi>
          <mi>4</mi>
          <mi>2-</mi>
        </msubsup>
      </math>
    </foreignObject>
  );
}

function Animation() {
  const copperAtomRef = React.useRef<SVGGElement>(null);
  const copperIonRef = React.useRef<SVGGElement>(null);
  const sulfateRef = React.useRef<SVGForeignObjectElement>(null);
  const copperElectronsRef = React.useRef<SVGGElement>(null);
  const zincElectronsRef = React.useRef<SVGGElement>(null);
  const zincIonRef = React.useRef<SVGGElement>(null);
  let initialized = false;

  async function animate() {
    if (
      initialized ||
      !zincElectronsRef.current ||
      !zincIonRef.current ||
      !copperAtomRef.current ||
      !copperElectronsRef.current ||
      !sulfateRef.current ||
      !copperIonRef.current
    ) {
      return;
    }

    initialized = true;
    const zincElectronsElement = zincElectronsRef.current;
    const zincIonElement = zincIonRef.current;
    const copperElectronsElement = copperElectronsRef.current;
    const copperAtomElement = copperAtomRef.current;
    const copperIonElement = copperIonRef.current;
    const sulfateElement = sulfateRef.current;

    function scene0() {
      zincElectronsElement.animate(
        { opacity: [1, 1], translate: "0 -120px" },
        1600,
      );

      return zincIonElement.animate(
        { opacity: [1, 1, 1, 0], translate: "70px 70px", easing: "ease-out" },
        2000,
      ).finished;
    }

    function scene1() {
      return copperElectronsElement.animate(
        {
          translate: ["0 -120px", "0 0"],
          opacity: [1, 1],
          easing: "ease-out",
        },
        2000,
      ).finished;
    }

    function scene2() {
      copperElectronsElement.animate(
        { opacity: [1, 0], easing: "ease-out" },
        2000,
      );
      sulfateElement.animate(
        { opacity: [1, 1, 0], translate: "-50px 0" },
        2000,
      );
      return copperIonElement.animate(
        {
          opacity: [1, 1],
          translate: ["-70px 60px", "0 0"],
          easing: "ease-out",
        },
        2000,
      ).finished;
    }

    function scene3() {
      copperIonElement.animate(
        {
          opacity: [1, 0],
        },
        2000,
      );
      copperAtomElement.animate(
        { opacity: [0, 1, 0], easing: "ease-out" },
        3000,
      );
    }

    await scene0();
    await scene1();
    await scene2();
    await scene3();
  }

  React.useEffect(() => {
    animate();
  }, []);

  return (
    <>
      <Electrons ref={zincElectronsRef} x={140} y={280} />
      <ZincIon ref={zincIonRef} x={140} y={280} />
      <Electrons x={510} y={280} ref={copperElectronsRef} />
      {/* <CopperIon x={440} y={340} ref={copperIonRef} /> */}
      <SulfateIon x={430} y={330} ref={sulfateRef} />
      <CopperIon x={510} y={280} ref={copperIonRef} />
      <CopperAtom x={510} y={280} ref={copperAtomRef} />
    </>
  );
}
