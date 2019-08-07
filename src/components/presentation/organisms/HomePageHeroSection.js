import React from 'react';
import Image from '../atoms/Image';
import LogoSet from '../molecules/LogoSet';
import Logo from '../atoms/Logo';
import Heading from '../atoms/Heading';
import Subhead from '../atoms/Subhead';
import Paragraph from '../atoms/Paragraph';
import styles from './HomePageHeroSection.module.css';

export default function HomePageHeroSection({photo, heading, subhead, logos, hook }) {
  return (
    <section className={styles['full']}>
      <div className={styles['photo']}>
        <Image src={photo.url} alt={photo.alt}/>
      </div>
      <div className={styles['header']}>
        <Heading flushTop={true}>{heading}</Heading>
        <Subhead>{subhead}</Subhead>
      </div>
      <div className={styles['content']}>
        <div className={styles['content-inner']}>
          {hook.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </div>
      </div>
      <div  className={styles['logos']}>
        <LogoSet>
          {logos.map(item => (
            <Logo margin={false} src={item.logo.url} alt={item.logo.alt} />
          ))}
        </LogoSet>
      </div>
    </section>
  );
}
