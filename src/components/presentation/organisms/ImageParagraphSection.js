import React from 'react';
import Subhead from '../atoms/Subhead';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';
import SplitSection from '../organisms/SplitSection';

// @TODO: Render copy as RichText
// @TODO: Render title
export default function ImageParagraphSection({ title, copy, image, side = 'left' }) {
  const firstSide = (side === 'left') ? 'right' : 'left';
  const paragraph = (<div>
    <Subhead>{title[0].text}</Subhead>
    {copy.map(p => (
      <Paragraph>{p.text}</Paragraph>
    ))}
  </div>);
  const img = (<Image src={image.url} alt={image.alt} />);
  const left = (side === 'left') ? img : paragraph;
  const right = (side === 'left') ? paragraph : img;
  return (
    <SplitSection
      first={firstSide}
      left={left}
      right={right}
    />
  );
}