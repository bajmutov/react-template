import {
  StyledFooter,
  StyledFooterWrapper,
  StyledFooterList,
  StyledFooterLink,
  // Twitter,
} from './Footer.styled';

import Container from 'components/Container';
import Icon from 'components/UI/Icon';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterWrapper>
          <Logo />

          <StyledFooterLink
            href="https://github.com/bajmutov/Rent-Car/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Privacy Policy
          </StyledFooterLink>

          <StyledFooterList>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={'telegram'} size={48} />
              </a>
            </li>
          </StyledFooterList>
        </StyledFooterWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
