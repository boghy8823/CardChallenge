import React from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledModal, ModalBody } from "./Modal.styled";

const Modal = ({
  onRequestClose,
  isOpen,
  maxWidth,
  maxHeight,
  overflow,
  shouldCloseOnOverlayClick,
  borderRadius,
  children,
}) => {
  return (
    <StyledModal
      className="modal"
      ariaHideApp={false}
      isOpen={isOpen}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      overflow={overflow}
      onRequestClose={onRequestClose}
      bodyOpenClassName="preventScroll"
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      borderRadius={borderRadius}
      style={{
        overlay: {
          zIndex: 99,
        },
      }}
    >
      <CloseButton onClick={onRequestClose}>
        <span>X</span>
      </CloseButton>
      {children}
    </StyledModal>
  );
};

Modal.propTypes = {
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  overflow: PropTypes.bool,
  maxHeight: PropTypes.string,
  shouldCloseOnOverlayClick: PropTypes.bool,
  borderRadius: PropTypes.string,
};

Modal.defaultProps = {
  onRequestClose: () => {},
  isOpen: false,
  maxWidth: null,
  overflow: false,
  maxHeight: null,
  shouldCloseOnOverlayClick: false,
  borderRadius: null,
};

export { ModalBody };

Modal.displayName = "Modal";

export default Modal;
