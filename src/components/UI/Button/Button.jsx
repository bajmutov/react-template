import { StyledButton } from './Button.styled';

const Button = ({ padY = 12, padX = 50, onClick, disabled, children }) => {
  return (
    <StyledButton padY={padY} padX={padX} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
