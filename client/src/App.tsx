import { useState, CSSProperties } from "react";

import Engine from "./components/Engine/Engine.tsx";

import "./App.css";

const defaultAngle = 90;
const defaultPeriod = 2;
const defaultBore = 2.5;

const inputStyle: CSSProperties = {
  position: "relative",
  width: "calc(100% - 2rem)",
  left: "1rem",
};

const inputLabelStyle: CSSProperties = { marginLeft: "2rem" };

function App() {
  const [bore, setBore] = useState(defaultBore);
  const [angle, setAngle] = useState(defaultAngle);
  const [period, setPeriod] = useState(defaultPeriod);
  const [speed, setSpeed] = useState(1 / defaultPeriod);

  return (
    <div>
      <div style={inputLabelStyle}>angle: {angle}</div>
      <input
        onChange={(event) => {
          const newAngle = Number.parseFloat(event.target.value);
          setAngle(newAngle);
        }}
        style={inputStyle}
        type="range"
        min="0"
        max="360"
        value={angle}
      />
      <div style={inputLabelStyle}>speed: {speed}</div>
      <div style={inputLabelStyle}>period: {period}</div>
      <input
        onChange={(event) => {
          const newSpeed = Number.parseFloat(event.target.value);
          setSpeed(newSpeed);
          setPeriod(Number.parseFloat((1 / newSpeed).toFixed(3)));
        }}
        style={inputStyle}
        type="range"
        step="0.01"
        min="0.05"
        max="10"
        value={speed}
      />
      <div style={inputLabelStyle}>bore: {bore}rem</div>
      <input
        onChange={(event) => {
          const newBore = Number.parseFloat(event.target.value);
          setBore(newBore);
        }}
        style={inputStyle}
        type="range"
        step="0.01"
        min="1.5"
        max="6"
        value={bore}
      />
      <Engine bore={`${bore}rem`} angle={angle} period={period} />
      <Engine bore={"3.5rem"} angle={90} period={2} />
    </div>
  );
}

export default App;
