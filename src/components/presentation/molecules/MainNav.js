import React, { Component } from 'react';
import styles from './MainNav.module.css';
import cx from 'classnames';

export default class MainNav extends Component {
  constructor() {
    super();
    this.state = { showMobileNav: false };
  }

  toggleNav = () => {
    this.setState(state => ({
      showMobileNav: !state.showMobileNav
    }));
  }

  render() {
    return (
      <nav className={styles['main-nav']}>
        <button className={styles['main-nav-toggle']} type="button" onClick={this.toggleNav}><span aria-hidden='true' className={styles['main-nav-toggle-symbol']}>{this.state.showMobileNav ? '×' : '☰'}</span><span className={styles['main-nav-toggle-sro']}>{this.state.showMobileNav ? 'Hide Navigation' : 'Show Navigation'}</span></button>
        <ul className={cx(styles['main-nav-list'], this.state.showMobileNav && styles['show'])}>
          {this.props.children.map((item, idx) => (
            <li key={`main-nav-item-${idx}`} className={styles['main-nav-list-item']}>{item}</li>
          ))}
        </ul>
      </nav>
    );
  }
}