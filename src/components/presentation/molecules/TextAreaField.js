import React from 'react';
import styles from './TextAreaField.module.css';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';

export default function TextAreaField({name, id, label, required = false}) {
  return (
    <div className={styles['textarea']}>
      <div className={styles['textarea-label']}>
        <Label text={label} required={required} htmlFor={id} />
      </div>
      <div className={styles['textarea-input']}>
        <TextArea name={name} id={id} required={required} />
      </div>
    </div>
  );
}