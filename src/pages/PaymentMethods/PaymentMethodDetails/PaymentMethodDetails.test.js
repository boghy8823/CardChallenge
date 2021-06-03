import React from "react";
import { mount } from "../../../helpers/testHelpers";
import PaymentMethodDetails from "./index";

const sampleCard = {
  holderName: "TEST2222asdas",
  cardNumber: "4444 3333 2222 1111",
  expirationDate: "1111",
  cvc: "222",
  id: 1622522170190,
};

const defaultProps = {
  onSubmit: () => {},
  closeModal: () => {},
  isModalOpen: true,
  paymentMethodDetails: {},
  inEditMode: false,
};

const setup = (props) =>
  mount(<PaymentMethodDetails {...defaultProps} {...props} />);

describe("Payment methods component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = setup({ paymentMethodDetails: sampleCard });

    expect(wrapper.find(PaymentMethodDetails)).toHaveLength(1);
  });

  it("should represent the card input fields", () => {
    const { wrapper } = setup();

    expect(wrapper.find(PaymentMethodDetails)).toHaveLength(1);
    expect(wrapper.find('Input[data-test="holder-name"]')).toHaveLength(1);
    expect(wrapper.find('Input[data-test="card-number"]')).toHaveLength(1);
    expect(wrapper.find('Input[data-test="expiration-date"]')).toHaveLength(1);
    expect(wrapper.find('Input[data-test="cvc-code"]')).toHaveLength(1);
  });

  it("should represent the submit button disabled when all inputs are empty", () => {
    const { wrapper } = setup();

    expect(wrapper.find(PaymentMethodDetails)).toHaveLength(1);

    expect(wrapper.find('Input[data-test="holder-name"]')).toHaveLength(1);
    expect(wrapper.find('Input[data-test="holder-name"]').prop("value")).toBe(
      ""
    );

    expect(wrapper.find('Input[data-test="card-number"]')).toHaveLength(1);
    expect(wrapper.find('Input[data-test="card-number"]').prop("value")).toBe(
      ""
    );

    expect(wrapper.find('Input[data-test="expiration-date"]')).toHaveLength(1);
    expect(
      wrapper.find('Input[data-test="expiration-date"]').prop("value")
    ).toBe("");

    expect(wrapper.find('Input[data-test="cvc-code"]')).toHaveLength(1);
    expect(wrapper.find('Input[data-test="cvc-code"]').prop("value")).toBe("");

    expect(
      wrapper.find('Button[data-test="payment-method-submit-btn"]')
    ).toHaveLength(1);
    expect(
      wrapper
        .find('Button[data-test="payment-method-submit-btn"]')
        .prop("disabled")
    ).toBe(true);
  });

  it("should handle holder name input field changes", () => {
    const { wrapper } = setup();
    const value = "value";
    const holderNameInput = wrapper.find('Input[data-test="holder-name"]');

    expect(holderNameInput.prop("value")).toBe("");

    holderNameInput.simulate("change", { target: { value } });

    setTimeout(() => {
      expect(holderNameInput.prop("value")).toBe(value);
    }, 0);
  });

  it("should handle card number input field changes", () => {
    const { wrapper } = setup();
    const value = "value";
    const cardNumberInput = wrapper.find('Input[data-test="card-number"]');

    expect(cardNumberInput.prop("value")).toBe("");

    cardNumberInput.simulate("change", { target: { value } });

    setTimeout(() => {
      expect(cardNumberInput.prop("value")).toBe(value);
    }, 0);
  });

  it("should handle expiration date input field changes", () => {
    const { wrapper } = setup();
    const value = "value";
    const expirationDateInput = wrapper.find(
      'Input[data-test="expiration-date"]'
    );

    expect(expirationDateInput.prop("value")).toBe("");

    expirationDateInput.simulate("change", { target: { value } });

    setTimeout(() => {
      expect(expirationDateInput.prop("value")).toBe(value);
    }, 0);
  });

  it("should handle cvc code input field changes", () => {
    const { wrapper } = setup();
    const value = "value";
    const cvcCodeInput = wrapper.find('Input[data-test="cvc-code"]');

    expect(cvcCodeInput.prop("value")).toBe("");

    cvcCodeInput.simulate("change", { target: { value } });

    setTimeout(() => {
      expect(cvcCodeInput.prop("value")).toBe(value);
    }, 0);
  });

  it("should handle form submit", () => {
    const onSubmit = jest.fn();
    const { wrapper } = setup();
    const holderNameInput = wrapper.find('Input[data-test="cvc-code"]');
    const cardNumberInput = wrapper.find('Input[data-test="card-number"]');
    const expirationDateInput = wrapper.find(
      'Input[data-test="expiration-date"]'
    );
    const cvcCodeInput = wrapper.find('Input[data-test="cvc-code"]');

    expect(wrapper.find('button[type="submit"]').prop("disabled")).toBeTruthy();

    holderNameInput.simulate("change", {
      target: { value: sampleCard.holderName },
    });
    cardNumberInput.simulate("change", {
      target: { value: sampleCard.cardNumber },
    });
    expirationDateInput.simulate("change", {
      target: { value: sampleCard.expirationDate },
    });
    cvcCodeInput.simulate("change", { target: { value: sampleCard.cvcCode } });

    setTimeout(() => {
      expect(
        wrapper.find('button[type="submit"]').prop("disabled")
      ).toBeFalsy();
      wrapper.find("form").simulate("submit");
      expect(onSubmit).toHaveBeenCalledTimes(1);
    }, 0);
  });
});
