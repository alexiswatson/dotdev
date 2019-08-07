import React from 'react';
import styles from './Work.module.css';
import LogoSet from '../molecules/LogoSet';
import Image from '../atoms/Image';
import Subhead from '../atoms/Subhead';
import Logo from '../atoms/Logo';
import Hook from '../atoms/Hook';

// @TODO: Factor out transformations?
export default function Work({src, alt, title, subtitle, awards, uid}) {
  const awardSet = awards && awards.map((award, idx) => {
    return award.awards_image && (<Logo key={`logo-${uid}-${idx}`} margin={false} src={award.awards_image.url} alt={award.awards_image.alt} />);
  });

  return (
    <article className={styles['work']}>
      <Image src={src} alt={alt} />
      <Subhead>{title}</Subhead>
      <Hook text={subtitle} />
      {awardSet[0] && (<LogoSet column={true}>{awardSet}</LogoSet>)}
    </article>
  );
}