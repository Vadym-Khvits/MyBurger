import * as React from 'react';
import Aux from '../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import * as classes from './Modal.css';

class Modal extends React.Component<any> {

    shouldComponentUpdate(nextProps: any) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;