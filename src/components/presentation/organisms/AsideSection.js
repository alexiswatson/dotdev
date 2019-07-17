import React from 'react';
import styles from './AsideSection.module.css';

export default function AsideSection({children, ...props}) {
  return (
    <section className={styles['aside']}>
      {children}
    </section>
  );
}