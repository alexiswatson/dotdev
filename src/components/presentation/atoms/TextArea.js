import React from 'react';
import styles from './TextArea.module.css';

export default function TextArea ({name, required = false, ...props}) {
  return (
    <textarea cols="5" className={styles['textarea']} name={name} required={required} {...props}>
    </textarea>
  );
}