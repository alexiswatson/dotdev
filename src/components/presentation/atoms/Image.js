import React from 'react';
import styles from './Image.module.css';
import cx from 'classnames';

export default function image({float = false, src, alt, ...props}) {
  return (
    <img src={src} alt={alt} {...props} className={cx(styles['image'], float && styles['float-' + float])} />
  )
}