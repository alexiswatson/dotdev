import React from 'react';
import styles from './NetlifyForm.module.css';
import Paragraph from '../atoms/Paragraph';
import TextField from '../molecules/TextField';
import TextAreaField from '../molecules/TextAreaField';
import { SubmitButton } from '../atoms/Button';

// @TODO: Decouple decomposition from layout.
// @TODO: Factor strategies out.
export default function NetlifyForm({title, copy, closing, name, method, fields, action = '#', ...props}) {
  const textStrategy = (field) => (
    (field.type === 'text' || field.type === 'email') ? <TextField label={field.label} name={field.name} id={field.name} required={(field.required === 'true') ? true : false} /> : null
  );
  const textareaStrategy = (field) => (
    (field.type === 'textarea') ? <TextAreaField label={field.label} name={field.name} id={field.name} required={(field.required === 'true') ? true : false} /> : null
  );
  const submitStrategy = (field) => (
    (field.type === 'submit') ? <SubmitButton name={field.name} value={field.value} /> : null
  );

  const fieldStrategies = {
      'text': textStrategy,
      'email': textStrategy,
      'textarea': textareaStrategy,
      'submit': submitStrategy
  }
  return (
    <div className={styles['form-container']}>
      <form className={styles['form']} name={name} data-netlify="true" data-netlify-honeypot="bot-field" action={action} method={method}>
        <div className={styles['form-header']}>
          <h2 className={styles['form-title']}>{title[0].text}</h2>
          {copy.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </div>
        <div className={styles['form-body']}>
          {fields.map(field => (fieldStrategies[field.type](field)))} 
          {closing.map(p => (
            <Paragraph small={true}>{p.text}</Paragraph>
          ))}
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value={name} />
        </div>
      </form>
    </div>
  );
}