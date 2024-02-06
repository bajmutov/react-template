import { StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
