import React from 'react';
import { Link } from 'gatsby';
import Logo from '../atoms/Logo';
import MainNav from '../molecules/MainNav';
import styles from './Masthead.module.css';

// @TODO: Make menu dynamic
export default function Masthead(props) {
  return (
    <header className={styles['masthead']}>
      <div className={styles['masthead-logo']}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles['masthead-nav']}>
        <MainNav>
          <Link to="/">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
        </MainNav>
      </div>
    </header>        
  );
}