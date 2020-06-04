import React from 'react';

import './App.css';

import Cylinder from './components/Cylinder/Cylinder';
import Piston from './components/Piston/Piston';
import ConRod from './components/ConRod/ConRod';
import CrankShaft from './components/CrankShaft/CrankShaft';

const engineStyle = {
    position: 'absolute' as 'absolute',
    top: '1rem',
    left: '10rem',
};

const angle = 52;
const bore = '2.5rem';

const delay = ((2 / 360) * (180 - angle)).toFixed(3);
// const delay = ((2 / 360) * (angle + 90)).toFixed(3);     // crossplane WIP

function App() {
    return (
        <div style={engineStyle}>
            <Cylinder angle={angle / 2} width={bore}>
                <Piston />
                <ConRod />
            </Cylinder>
            <Cylinder angle={-(angle / 2)} width={bore} offset={`${delay}s`}>
                <Piston />
                <ConRod />
            </Cylinder>
            <CrankShaft />
        </div>
    );
}

export default App;
