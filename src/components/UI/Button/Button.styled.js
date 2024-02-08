import styled from 'styled-components';

export const StyledButton = styled.button`
  color: var(--white-text-color);
  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 600;
  border: 1px solid var(--accent-color);
  padding: ${({ padY, padX }) => `${padY}px ${padX}px`};
  border-radius: 12px;
  background: var(--accent-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--hover-color);
  }
`;
