import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';
import Subhead from '../atoms/Subhead';
import styles from './WorkHighlightSection.module.css';



export default function WorkHighlightSection({title, org, image, date, hook, copy, ...props}) {
  return (
    <header className={styles["section"]}>
      <div className={styles['hero']}>
        <Image src={image.url} alt={image.alt} />
      </div>
     <div className={styles['details-grid']}>
        <div className={styles['details-cell']}>
          <div className={styles['details-head']}>
            <Heading flushTop={true}>{title}</Heading>
            <Subhead>{org}</Subhead>
          <Paragraph><time className={styles['date']}>{date}</time></Paragraph>
          </div>
          <div className={styles['details-hook']}>
            <Subhead flushTop={true}>{hook}</Subhead>
            <Paragraph>{copy}</Paragraph>
          </div>
        </div>
    </div>
    </header>
  );
}