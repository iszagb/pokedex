import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} className={classes.input} id={props.id} type={props.type} placeholder={props.placeholder} />
    </>
  );
});

export default Input;
