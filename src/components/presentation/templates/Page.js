import React from 'react';
import Masthead from '../organisms/Masthead';
import Colophon from '../organisms/Colophon';
import Heading from '../atoms/Heading';
import styles from './Page.module.css';

export default function Page({title = null, children, ...props}) {
  return (
    <div className={styles['page']}>
      <div className={styles['page-masthead']}>
        <Masthead />
      </div>
      <div className={styles['page-main']}>
        {title && (
          <div className={styles['page-heading']}>
            <Heading flushBottom={true}>{title}</Heading>
          </div>
        )}
        {children}
      </div>
      <div className={styles['page-colophon']}>
        <Colophon />
      </div>
    </div>
  );
}