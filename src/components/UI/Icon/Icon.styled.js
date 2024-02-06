import styled from 'styled-components';

// Del all fill in sprite or fill="current"
export const SVG = styled.svg`
  width: 48px;
  height: 48px;
  fill: #03a9f4;
  transition: fill var(--transition);

  &:hover,
  &:focus {
    fill: var(--hover-color);
  }
`;
