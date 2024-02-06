import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: var(--overlay-color);
  width: 100%;
  height: 100%;
  transition: opacity var(--transition), visibility var(--transition);
`;

export const StyledModalWindow = styled.div`
  // position: absolute;
  position: relative;
  width: 541px;
  min-height: 576px;
  padding: 24px;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  background-color: var(--main-bg-color);
  box-shadow: var(--box-shadow);
  transform: translate(-50%, -50%) scale(1) rotate(0);
  transition: transform var(--transition);
`;

export const StyledModalWindowCloseButton = styled.button`
  width: 24px;
  height: 24px;
  // border-radius: 50%;
  // background: var(--border-color);
  // border: 1px solid rgba(0, 0, 0, 0.1);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // margin-left: auto;
  // margin-bottom: 24px;
  // transition: fill 250ms var(--transition),
  // background-color 250ms var(--transition);

  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 16px;
  right: 16px;

  &:hover,
  &:focus {
    & > svg {
      stroke: var(--hover-color);
      fill: var(--hover-color);
    }
  }
`;

export const StyledModalWindowCloseIcon = styled.svg`
  stroke: var(--accent-color);
  fill: var(--accent-color);
  width: 24px;
  height: 24px;

  transition: var(--transition);
`;

// export const StyledModalWindowContainer = styled.div``;
