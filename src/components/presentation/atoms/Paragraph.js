import React from 'react';
import styles from './Paragraph.module.css';
import cx from 'classnames';

export default function Paragraph({small = false, children}) {
  return (
    <p className={cx(styles['paragraph'], small && styles['small'])}>{children}</p>
  );
}