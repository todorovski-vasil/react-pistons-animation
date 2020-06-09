import React from 'react';

import classes from './CrankShaft.module.css';

interface Props {
    period: number;
}

function CrankShaft(props: Props) {
    return <div className={classes.crankShaft}></div>;
}

export default CrankShaft;
