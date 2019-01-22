import * as React from 'react';
import Aux from '../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import * as classes from './Modal.css';

const modal = (props: any) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
            }}
            >
            {props.children}
        </div>
    </Aux>
);

export default modal;