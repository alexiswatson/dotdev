import React from 'react';
import styles from './Heading.module.css';
import cx from 'classnames';

export default function Heading({children, flushBottom = false, flushTop = false, ...props}) {
  return (
    <h1 className={cx(styles['heading'], flushBottom && styles['no-bottom-margin'], flushTop && styles['no-top-margin'])} {...props}>{children}</h1>
  );
}