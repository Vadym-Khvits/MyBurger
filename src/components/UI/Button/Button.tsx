import * as React from 'react';

import * as classes from '../../../styles/components/UI.css';

const button = (props: any) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

export default button;