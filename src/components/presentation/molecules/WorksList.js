import React from 'react';
import Work from '../molecules/Work';
import styles from './WorksList.module.css';

export default function WorksList({works, ...props}) {
  return (
    <ul className={styles['works']}>
      {works.map(work => {
        const { title, teaser, hero_image, awards } = work.node;
        const uid = work.node._meta.uid;
        return (
          <a className={styles['works-link']} href={`/works/${uid}`}>
          <li className={styles['works-item']} key={uid}>
              <Work 
                title={title[0].text}
                subtitle={teaser}
                src={hero_image.url} 
                alt={hero_image.alt} 
                awards={awards}
                uid={uid} 
                />
          </li>
          </a>
          );
      })}
    </ul>
  )
}