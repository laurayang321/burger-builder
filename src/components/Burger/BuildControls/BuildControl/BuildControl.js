import React from 'react';

const buildControl = (props) => (
    <div className={classses.BuildControl}>
        <div className={classses.Label}>{props.Label}</div>
        <button className={classses.Less}>Less</button>
        <button className={classses.More}>More</button>
    </div>
);

export default buildControl;