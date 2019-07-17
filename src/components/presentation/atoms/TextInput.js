import React from 'react';
import styles from './TextInput.module.css';

export default function TextInput ({name, type = 'text', required = false, ...props}) {
  return (
    <input className={styles['textinput']} name={name} type={type} required={required} {...props} />
  );
}