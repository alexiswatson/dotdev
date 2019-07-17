import React from 'react';
import styles from './ParagraphSection.module.css';
import Subhead from '../atoms/Subhead';
import PrismicRichText from '../../../shared/js/PrismicRichText';

export default function ParagraphSection({title = false, paragraphs, ...props}) {
  return (
    <section className={styles['paragraph']}>
      {title && (<Subhead>{title && title[0].text}</Subhead>)}
      {paragraphs && PrismicRichText(paragraphs)}


    </section>
  );
}