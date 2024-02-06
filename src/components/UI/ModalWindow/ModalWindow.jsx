import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import {
  StyledModalWindowOverlay,
  StyledModalWindow,
  StyledModalWindowCloseButton,
  StyledModalWindowCloseIcon,
  StyledModalWindowContainer,
} from './ModalWindow.styled';

const ModalWindow = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <StyledModalWindowOverlay onClick={handleBackdropClick}>
      <StyledModalWindow>
        <StyledModalWindowCloseButton
          aria-label="Close button"
          onClick={onClose}
        >
          <StyledModalWindowCloseIcon>
            <use xlinkHref="/sprite.svg#icon-cross" />
          </StyledModalWindowCloseIcon>
        </StyledModalWindowCloseButton>

        <StyledModalWindowContainer>{children}</StyledModalWindowContainer>
      </StyledModalWindow>
    </StyledModalWindowOverlay>,
    document.getElementById('modal-root')
  );
};

export default ModalWindow;
