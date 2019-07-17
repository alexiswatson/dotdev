import React from 'react';
import styles from './SplitSection.module.css';
import cx from 'classnames';

export default function SplitSection({left, right, first = 'left', ...props}) {

  return (
    <div className={styles['section']} {...props}>
      <div className={cx(styles['left'], first !== 'right' && styles['first'])}>
        {left}
      </div>
      <div className={cx(styles['right'], first === 'right' && styles['first'])}>
        {right}
      </div>
    </div>
  );
}