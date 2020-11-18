import React from 'react';
import styled from 'styled-components';

// Styling
import { LogoImg, BodyText, FooterWrapper } from '../styling/styling';

const LogoImgMiniature = styled(LogoImg)`
  width: 40px;
  margin-bottom: 10px;
`;

const FooterText = styled(BodyText)`
  font-size: 10px;
  color: #fff;
`;

// ----------------------------------------------------------------

export const Footer = () => {
  return (
    <FooterWrapper>
      <LogoImgMiniature
        src={process.env.PUBLIC_URL + '/images/logo-white.png'}
      />{' '}
      <FooterText>
        This site is made by Anna Hellqvist, Sara Stjernberg, Mats Johansen &
        Karin Nordkvist
      </FooterText>
      <FooterText>as Project 13 @ Technigo Bootcamp 2020</FooterText>
    </FooterWrapper>
  );
};
