import React from 'react';
import styles from './MainPane.module.css';

export default function MainPane({title, children, ...props}) {
  return (
    <div className={styles['main-pane']}>
      {children}
    </div>
  );
}