import React from 'react';
import styles from './Label.module.css';

export default function Label({text, required = false, ...props}) {
  const requiredLabel = required && 
    (<>
      <span className={styles['sro']}>Required</span>
      <span aria-hidden="true" className={styles['required-star']}>*</span>
    </>); 
  return (
    <label {...props} className={styles['label']}>{requiredLabel} {text}</label>
  )
}