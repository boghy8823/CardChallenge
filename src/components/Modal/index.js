import React from "react";
import PropTypes from "prop-types";
import { CloseButton, StyledModal, ModalBody, StyledCloseIcon } from "./Modal.styled";

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
          backgroundColor: "rgba(102, 111, 112, 0.7)"
        },
      }}
    >
      <CloseButton onClick={onRequestClose}>
        <StyledCloseIcon />
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
