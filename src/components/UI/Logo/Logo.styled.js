import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLogoIcon = styled.svg`
  height: 32px;
  width: 32px;
  fill: var(--dark-blue-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--accent-color);
  }
`;

export const StyledLogoTitle = styled.p`
  color: var(--main-text-color);
  font-weight: 600;
  font-size: 20px;
`;
