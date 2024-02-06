import Container from 'components/UI/Container';
import Navigation from 'components/UI/Navigation';
import Logo from 'components/UI/Logo';

import { StyledHeader, StyledHeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContainer>
          <Logo text />
          <Navigation />
        </StyledHeaderContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
