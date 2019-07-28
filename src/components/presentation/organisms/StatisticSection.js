import React from 'react';
import Subhead from '../atoms/Subhead';
import Paragraph from '../atoms/Paragraph';
import Statistic from '../molecules/Statistic';
import SplitSection from '../organisms/SplitSection';

export default function StatisticSection({ title, copy, label, value, style, side = 'left' }) {
  const firstSide = (side === 'left') ? 'right' : 'left';
  const paragraph = (<div>
    {copy.map(p => (
      <Paragraph>{p.text}</Paragraph>
    ))}
  </div>);
  const statistic = (<Statistic type={style} figure={value} details={label} />);
  const left = (side === 'left') ? statistic : paragraph;
  const right = (side === 'left') ? paragraph : statistic;
  return (
    <SplitSection
      title={title[0].text}
      first={firstSide}
      left={left}
      right={right}
    />
  );
}