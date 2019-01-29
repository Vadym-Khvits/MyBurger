import * as React from 'react';
import * as classes from '../../../styles/components/UI.css';

const backdrop = (props: any) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}/> : null
);

export default backdrop;