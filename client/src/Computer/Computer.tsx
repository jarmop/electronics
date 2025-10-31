import { useState } from "react";
import { sum } from "./ALU.ts";
import { decToBin, isEmptyRegister } from "./helpers.ts";

export function Computer() {
  const [input0, setInput0] = useState<(1 | 0)[]>([0, 0, 0, 0]);
  const [input1, setInput1] = useState<(1 | 0)[]>([0, 0, 0, 0]);
  const inputOptions = [
    [7, 8, 9, "/"],
    [4, 5, 6, "x"],
    [1, 2, 3, "-"],
    [0, ".", "=", "+"],
  ];

  //   const [input0, setInput0] = useState<number | null>(null);
  const [operand, setOperand] = useState<string | null>(null);

  const [output, setOutput] = useState<number | null>(null);

  function handleInput(input: string | number) {
    if (typeof input === "number") {
      if (operand === null) {
        setInput0(decToBin(input));
      } else {
        setInput1(decToBin(input));
      }
    } else if (!isEmptyRegister(input0)) {
      setOperand(input);
    }

    // if (input0 !== null) {
    //   if (typeof input === "string") {
    //     setOperand(input);
    //   } else if (operand !== null) {
    //     const result = sum(input0, input);
    //     setOutput(result);
    //     setInput0(null);
    //     setOperand("");
    //   }
    // } else if (typeof input !== "string") {
    //   setInput0(input);
    // }
  }

  return (
    <>
      <div style={{ height: "20px" }}>
        {output}
      </div>
      <div
        style={{
          border: "1px solid black",
          width: "max-content",
          display: "grid",
          gridTemplateColumns: "repeat(4, min-content)",
          gap: "1px",
          background: "black",
        }}
      >
        {inputOptions.flat().map((i) => (
          <div
            key={i}
            style={{
              width: "60px",
              height: "60px",
              textAlign: "center",
              alignContent: "center",
              background: "white",
            }}
            onClick={() => handleInput(i)}
          >
            {i}
          </div>
        ))}
      </div>
      <br />
      {
        /* <div style={{ height: "20px" }}>
        {input0}
      </div> */
      }
      <div style={{ width: "min-content" }}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div style={{ height: "20px", width: "20px", textAlign: "center" }}>
            {operand}
          </div>
          <div>
            <div
              style={{
                border: "1px solid black",
                width: "max-content",
                display: "grid",
                gridTemplateColumns: "repeat(4, min-content)",
                gap: "1px",
                background: "black",
              }}
            >
              {input0.flat().map((b, i) => <Bit key={i} value={b} />)}
            </div>
            <div
              style={{
                border: "1px solid black",
                width: "max-content",
                display: "grid",
                gridTemplateColumns: "repeat(4, min-content)",
                gap: "1px",
                background: "black",
              }}
            >
              {input1.flat().map((b, i) => <Bit key={i} value={b} />)}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

interface BitProps {
  value: number;
}

function Bit({ value }: BitProps) {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        textAlign: "center",
        alignContent: "center",
        background: "white",
      }}
    >
      {value}
    </div>
  );
}
