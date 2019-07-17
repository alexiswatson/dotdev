import React from 'react';
import styles from './TextAreaField.module.css';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';

export default function TextAreaField({name, label, required = false}) {
  return (
    <div className={styles['textarea']}>
      <div className={styles['textarea-label']}>
        <Label text={label} required={required} htmlFor={name} />
      </div>
      <div className={styles['textarea-input']}>
        <TextArea name={name}required={required} />
      </div>
    </div>
  );
}