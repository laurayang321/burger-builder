import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div className={classes.div}></div>
        <div className={classes.div}></div>
        <div className={classes.div}></div>
    </div>
);

export default drawerToggle;