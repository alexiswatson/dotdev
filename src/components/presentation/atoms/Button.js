import React from 'react';
import styles from './Button.module.css';
import { Link } from 'gatsby';
import cx from 'classnames';

function Button({children, ...props}) {
  return (
    <button type="button" className={styles['button']} {...props}>{children}</button>
  );
}

function ButtonLink({text, to, ...props}) {
  return (
    <a href={to} className={styles['button']}>{text}</a>
  )
}

function SubmitButton({name, value, ...props}) {
  return (
    <input className={cx(styles['button'], styles['submit'])} name={name} type="submit" value={value} {...props} />
  );
}

export { Button, ButtonLink, SubmitButton };