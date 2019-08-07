import React from 'react';
import { Link } from 'gatsby';
import Logo from '../atoms/Logo';
import SocialNav from '../molecules/SocialNav';
import styles from './Colophon.module.css';
import iaap_cpwa from '../../../../assets/images/iaap_cpwa.jpg';
import github from '../../../../assets/images/social_logo-github.svg';
import twitter from '../../../../assets/images/social_logo-twitter.svg';
import linkedin from '../../../../assets/images/social_logo-linkedin.svg';

export default function Colophon(props) {
    return (
        <footer className={styles['colophon']}>
          <div className={styles['colophon-logo']}>
            <Link to="/">
              <Logo bw={true} />
            </Link>
          </div>
          <div className={styles['colophon-nav']}>
            <SocialNav>
              <a href="https://twitter.com/alexiswatsondev"><img src={twitter} alt='Twitter' /></a>
              <a href="https://linkedin.com/in/davidmwatson"><img src={linkedin} alt='LinkedIn' /></a>
              <a href="https://github.com/alexiswatson"><img src={github} alt='GitHub' /></a>
            </SocialNav>
          </div>
          <div className={styles['colophon-certs']}>
            <a href="https://www.accessibilityassociation.org/cpwacertification"><img className={styles['colophon-iaap-logo']} src={iaap_cpwa} alt="International Association of Accessibility Professionals, Certified Professional in Web Accessibility" /></a>
          </div>
       </footer>
    );
}