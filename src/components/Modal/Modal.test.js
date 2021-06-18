import React from "react";
import Modal from "./index";
import { CloseButton } from "./Modal.styled";
import Button from "../Button";
import { mount } from "../../helpers/testHelpers";

const defaultProps = {
  children: Button,
};

const setup = (props) =>
mount(
    <Modal {...defaultProps} {...props}>
        <Button />
    </Modal>
  );

describe("Modal component", () => {
  it("should represent the modal component mounted with defaultProps", () => {
    const { wrapper } = setup();

    expect(wrapper.find("Styled(Modal)")).toHaveLength(1);
    expect(wrapper.find("Styled(Modal)").prop("className")).toBe("modal");
    expect(wrapper.find("Styled(Modal)").prop("isOpen")).toBe(false);
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  it("should represent the open modal", () => {
    const { wrapper } = setup({ isOpen: true });

    expect(wrapper.find("Styled(Modal)").prop("isOpen")).toBeTruthy();
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should trigger close modal action", () => {
    const onClose = jest.fn();
    const { wrapper } = setup({ onRequestClose: onClose, isOpen: true });

    expect(wrapper.find("Styled(Modal)").prop("isOpen")).toBeTruthy();
    expect(wrapper.find(Button)).toHaveLength(1);

    wrapper.find(CloseButton).simulate("click");

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
