import React from 'react';
import styles from './SocialNav.module.css';

export default function SocialNav({children}) {
  return (
    <nav className={styles['social-nav']}>
      <ul className={styles['social-nav-list']}>
        {children.map((item, idx) => (
          <li key={`social-nav-item-${idx}`} className={styles['social-nav-list-item']}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}