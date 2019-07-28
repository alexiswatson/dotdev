import React from 'react';
import Subhead from '../atoms/Subhead';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';
import SplitSection from '../organisms/SplitSection';

export default function ImageParagraphSection({ title, copy, image, side = 'left' }) {
  const firstSide = (side === 'left') ? 'right' : 'left';
  const paragraph = (<div>
    {copy.map(p => (
      <Paragraph>{p.text}</Paragraph>
    ))}
  </div>);
  const img = (<Image src={image.url} alt={image.alt} />);
  const left = (side === 'left') ? img : paragraph;
  const right = (side === 'left') ? paragraph : img;
  return (
    <SplitSection
      title={title[0].text}
      first={firstSide}
      left={left}
      right={right}
    />
  );
}