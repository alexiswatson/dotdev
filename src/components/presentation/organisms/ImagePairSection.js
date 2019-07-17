import React from 'react';
import styles from './ImagePairSection.module.css';
import cx from 'classnames';
import Image from '../atoms/Image';

export default function ImagePairSection({src, alt, side = 'left', children, ...props}) {
  const imageSide = (side === 'right') ? 'right' : false;
  const copySide = (side === 'right') ? false : 'right';
  return (
    <section className={styles['section']}>
      <div className={cx(styles['copy'], copySide && styles['right'])}>
        {children}
      </div>
      <div className={cx(styles['image'], imageSide && styles['right'])}>
        <Image src={src} alt={alt} />
      </div>
    </section>
  );
}