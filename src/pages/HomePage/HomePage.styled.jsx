import styled from 'styled-components';
import Image from 'assets/backgroundImg/car.jpg';

export const HeroSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 112px;
  padding-bottom: 112px;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--light-text-color);
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${Image});
`;
export const Heading = styled.h1`
  font-size: 36px;
  line-height: calc(40 / 36);
  color: var(--light-text-color);
  margin-bottom: 72px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: var(--main-text-color);
  text-align: center;
`;
