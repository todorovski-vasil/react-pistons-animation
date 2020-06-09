import React, { useState, CSSProperties } from 'react';

import './App.css';

import Engine from './components/Engine/Engine';

const defaultAngle = 90;
const defaultPeriod = 2;
const defaultBore = 2.5;

const inputStyle: CSSProperties = {
    position: 'relative',
    width: 'calc(100% - 2rem)',
    left: '1rem',
};

function App() {
    const [bore, setBore] = useState(defaultBore);
    const [angle, setAngle] = useState(defaultAngle);
    const [period, setPeriod] = useState(defaultPeriod);
    const [speed, setSpeed] = useState(1 / defaultPeriod);

    return (
        <div>
            <input
                onChange={(event) => {
                    const newAngle = Number.parseFloat(event.target.value);
                    setAngle(newAngle);
                }}
                style={inputStyle}
                type='range'
                min='0'
                max='360'
                value={angle}
            />
            <div>angle: {angle}</div>
            <input
                onChange={(event) => {
                    const newSpeed = Number.parseFloat(event.target.value);
                    setSpeed(newSpeed);
                    setPeriod(1 / newSpeed);
                }}
                style={inputStyle}
                type='range'
                step='0.01'
                min='0.05'
                max='10'
                value={speed}
            />
            <div>speed: {speed}</div>
            <div>period: {period}</div>
            <input
                onChange={(event) => {
                    const newBore = Number.parseFloat(event.target.value);
                    setBore(newBore);
                }}
                style={inputStyle}
                type='range'
                step='0.01'
                min='1.5'
                max='6'
                value={bore}
            />
            <div>bore: {bore}rem</div>
            <Engine bore={`${bore}rem`} angle={angle} period={period} />
            <Engine bore={'3.5rem'} angle={90} period={2} />
        </div>
    );
}

export default App;
