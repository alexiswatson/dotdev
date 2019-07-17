import React from 'react';
import { Link } from 'gatsby';
import styles from './StyledLink.module.css';

export default function StyledLink({children, ...props}) {
  return (
    <Link className={styles['link']} {...props}>
      {children}
    </Link>
  );
}