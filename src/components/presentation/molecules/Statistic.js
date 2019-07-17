import React from 'react';
import Image from '../atoms/Image';
import styles from './Statistic.module.css';
import cx from 'classnames';

import dateImg from '../../../../assets/images/statistic-date.svg';

export default function Statistic({type = false, figure, details, ...props}) {
  return (
    <figure className={cx(styles['statistic'], type && styles[type])}>
      {type === 'date' && <div className={styles['image']}><Image src={dateImg} alt="" /></div>}
      <div className={styles['figure-wrapper']}>
        <span className={styles['figure']}>{figure}</span>
      </div>
      <span className={styles['details']}>{details}</span>
    </figure>
  );
}