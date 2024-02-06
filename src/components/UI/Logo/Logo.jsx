import { StyledLogoLink, StyledLogoIcon, StyledLogoTitle } from './Logo.styled';

const Logo = ({ needText }) => {
  return (
    <StyledLogoLink to="/">
      <StyledLogoIcon>
        <use xlinkHref="/sprite.svg#icon-logo" />
      </StyledLogoIcon>
      {needText && <StyledLogoTitle>LOgoNAme</StyledLogoTitle>}
    </StyledLogoLink>
  );
};

export default Logo;
