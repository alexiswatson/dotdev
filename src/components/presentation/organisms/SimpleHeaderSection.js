import React from 'react';
import styles from './SimpleHeaderSection.module.css';
import Heading from '../atoms/Heading';

export default function SimpleHeaderSection({children, title, ...props}) {
  return (
    <section className={styles['header']}>
      <Heading>{title}</Heading>
      {children}
    </section>
  );
}