import * as React from 'react';
import * as classes from '../../../styles/components/UI.css';

const input = (props: any) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input
                className={classes.InputElement}
                {...props}                
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                   ))}
                </select>
           );
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props}
                // {...props.elementConfig}
                // type={props.type}
                // name={props.name}
                // placeholder={props.placeholder}
                // value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
   );
};

export default input;