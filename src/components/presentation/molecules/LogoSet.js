import React from 'react';
import styles from './LogoSet.module.css';
import cx from 'classnames';

export default function LogoSet({column = false, children, ...props}) {
  return (
    <ul className={cx(styles['logo-set'], column && styles['column'])}>
      {children.map((item, idx) => (
          <li key={`logo-set-item-${idx}`} className={styles['logo-item']}>{item}</li>
      ))}
    </ul>
  )
}