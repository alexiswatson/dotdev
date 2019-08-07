import React from 'react';
import LogoSet from '../molecules/LogoSet';
import Logo from '../atoms/Logo';

export default function LogoSetSection({logos}) {
  return (
    <LogoSet>
      {logos.map(logo => (
        <Logo margin={false} src={logo.logo_set_logo_image1.url} alt={logo.logo_set_logo_image1.alt} />
      ))}
    </LogoSet>
  );
}