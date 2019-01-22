import * as React from 'react';

import * as classes from './Button.css';

const button = (props: any) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;