import React from 'react';
import styles from './Subhead.module.css';
import cx from 'classnames';

export default function Subhead({children, flushTop = false, ...props}) {
  return (
    <h2 className={cx(styles['subhead'], flushTop && styles['no-top-margin'])} {...props}>{children}</h2>
  );
}