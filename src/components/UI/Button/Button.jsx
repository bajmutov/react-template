import { StyledButton } from './Button.styled';

const Button = ({
  type = 'button',
  padY = 12,
  padX = 50,
  fill,
  onClick,
  disabled,
  children,
}) => {
  return (
    <StyledButton
      type={type}
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
