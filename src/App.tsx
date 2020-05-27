import React from 'react';

import './App.css';

import Cylinder from './components/Cylinder/Cylinder';
import Piston from './components/Piston/Piston';
import ConRod from './components/ConRod/ConRod';

function App() {
    return (
        <Cylinder>
            <Piston />
            <ConRod />
        </Cylinder>
    );
}

export default App;
