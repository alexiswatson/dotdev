import React from 'react';
import cx from 'classnames';
import styles from './Logo.module.css';
import logo from '../../../../assets/images/logo.svg';
import logo_bw from '../../../../assets/images/logo_bw.svg'

export default function Logo({bw = false, src = false, small = false, margin = true, ...props}) {
  const defaultSrc = (bw ? logo_bw : logo);
  const thisSrc = (src || defaultSrc)
    
  return (
    <img className={cx([styles['logo'], bw && styles['logo-bw'], !margin && styles['logo-no-margin'], small && styles['logo-sm']])} src={thisSrc} alt="Alexis Watson logo" />
  );
}