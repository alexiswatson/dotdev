import React from 'react';
import styles from './TextField.module.css';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';

export default function TextField({name, label, type='text', required = false}) {
  return (
    <div className={styles['textfield']}>
      <div className={styles['textfield-label']}>
        <Label text={label} required={required} htmlFor={name} />
      </div>
      <div className={styles['textfield-input']}>
        <TextInput name={name} type={type} required={required} />
      </div>
    </div>
  );
}