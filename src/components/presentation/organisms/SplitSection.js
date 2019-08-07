import React from 'react';
import Subhead from '../atoms/Subhead';
import styles from './SplitSection.module.css';
import cx from 'classnames';

export default function SplitSection({title, left, right, first = 'left'}) {
  return (
    <div className={styles['section']}>
      {title && (<div className={styles['title']}>
        <Subhead>{title}</Subhead>
      </div>)}
      <div className={cx(styles['left'], first !== 'right' && styles['first'])}>
        {left}
      </div>
      <div className={cx(styles['right'], first === 'right' && styles['first'])}>
        {right}
      </div>
    </div>
  );
}