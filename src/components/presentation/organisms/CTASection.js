import React from 'react';
import styles from './CTASection.module.css';
import { ButtonLink } from '../atoms/Button';
import Paragraph from '../atoms/Paragraph';
import PrismicLinkURL from '../../../shared/js/PrismicLinkURL';

export default function CTASection({title, hook, prompt, cta, to, ...props}) {
  return (
    <section className={styles['cta']}>
      <div className={styles['cta-inner']}>
        <h2 className={styles['title']}>{title[0].text}</h2>
        {hook.map(paragraph => (
          <Paragraph>{paragraph.text}</Paragraph>
        ))}
        <h3 className={styles['prompt']}>{prompt[0].text}</h3>
        <div className={styles['cta-button']}>
          <ButtonLink to={PrismicLinkURL(to)} text={cta} />
        </div>
      </div>
    </section>
  );
}