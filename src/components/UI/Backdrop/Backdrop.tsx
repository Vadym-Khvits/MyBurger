import * as React from 'react';
import * as classes from './Backdrop.css';

const backdrop = (props: any) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}/> : null
);

export default backdrop;