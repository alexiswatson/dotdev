import React from 'react';
import styles from './Hook.module.css';

export default function Hook({text, ...props}) {
  return (
    <h3 className={styles['hook']}>{text}</h3>
  );
}