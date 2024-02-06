import Container from 'components/UI/Container';
import Logo from '../ui/Logo/Logo';
import Navigation from 'components/UI/Navigation';

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
