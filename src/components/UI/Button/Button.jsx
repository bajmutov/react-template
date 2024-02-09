import { StyledButton } from './Button.styled';

const Button = ({
  padY = 12,
  padX = 50,
  fill,
  onClick,
  disabled,
  children,
}) => {
  return (
    <StyledButton
      padY={padY}
      padX={padX}
      disabled={disabled}
      onClick={onClick}
      fill={fill}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
