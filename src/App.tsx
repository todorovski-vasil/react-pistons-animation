import React from 'react';

import './App.css';

import Cylinder from './components/Cylinder/Cylinder';
import Piston from './components/Piston/Piston';
import ConRod from './components/ConRod/ConRod';
import CrankShaft from './components/CrankShaft/CrankShaft';

const engineStyle = {
    position: 'absolute' as 'absolute',
    top: '1rem',
    left: '5rem',
    width: '18rem',
    height: '15rem',
};

function App() {
    const delay = ((2 / 360) * (76 + 52)).toFixed(3);
    // const delay = ((2 / 360) * 180).toFixed(3);

    return (
        <div style={engineStyle}>
            <Cylinder angle={26}>
                <Piston />
                <ConRod />
                <CrankShaft />
            </Cylinder>
            <Cylinder angle={-26} offset={`${delay}s`}>
                <Piston />
                <ConRod />
            </Cylinder>
        </div>
    );
}

export default App;
