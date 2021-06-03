// import React from "react";
// import { mount } from "../../helpers/testHelpers";
// import PaymentMethodDetails from "./index";

// const sampleCard = {
//   holderName: "TEST2222asdas",
//   cardNumber: "4444 3333 2222 1111",
//   expirationDate: "1111",
//   cvc: "222",
//   id: 1622522170190,
// };

// const defaultProps = {
//   onSubmit: () => {},
//   closeModal: () => {},
//   isModalOpen: true,
//   paymentMethodDetails: {},
//   inEditMode: false,
// };

// const setup = (props) =>
//   mount(<PaymentMethodDetails {...defaultProps} {...props} />);

// describe("Payment methods component", () => {
//   it("should represent the component mounted", () => {
//     const { wrapper } = setup({ paymentMethodDetails: sampleCard });

//     expect(wrapper.find(PaymentMethodDetails)).toHaveLength(1);
//   });

//   it("should represent the card input fields", () => {
//     const { wrapper } = setup();

//     expect(wrapper.find(PaymentMethodDetails)).toHaveLength(1);
//     expect(wrapper.find('Input[data-test="holder-name"]')).toHaveLength(1);
//     expect(wrapper.find('Input[data-test="card-number"]')).toHaveLength(1);
//     expect(wrapper.find('Input[data-test="expiration-date"]')).toHaveLength(1);
//     expect(wrapper.find('Input[data-test="cvc-code"]')).toHaveLength(1);
//   });

//   it("should represent the submit button disabled when all inputs are empty", () => {
//     const { wrapper } = setup();

//     expect(wrapper.find(PaymentMethodDetails)).toHaveLength(1);

//     expect(wrapper.find('Input[data-test="holder-name"]')).toHaveLength(1);
//     expect(wrapper.find('Input[data-test="holder-name"]').prop("value")).toBe(
//       ""
//     );

//     expect(wrapper.find('Input[data-test="card-number"]')).toHaveLength(1);
//     expect(wrapper.find('Input[data-test="card-number"]').prop("value")).toBe(
//       ""
//     );

//     expect(wrapper.find('Input[data-test="expiration-date"]')).toHaveLength(1);
//     expect(
//       wrapper.find('Input[data-test="expiration-date"]').prop("value")
//     ).toBe("");

//     expect(wrapper.find('Input[data-test="cvc-code"]')).toHaveLength(1);
//     expect(wrapper.find('Input[data-test="cvc-code"]').prop("value")).toBe("");

//     expect(
//       wrapper.find('Button[data-test="payment-method-submit-btn"]')
//     ).toHaveLength(1);
//     expect(
//       wrapper
//         .find('Button[data-test="payment-method-submit-btn"]')
//         .prop("disabled")
//     ).toBe(false);
//   });

//   it("should handle input field changes", () => {
//     const { wrapper } = mount(<PaymentMethodDetails />);
//     const value = "value";
//     const holderNameInput = wrapper.find('Input[data-test="holder-name"]');

//     expect(holderNameInput.prop("value")).toBe("");

//     holderNameInput.simulate("change", { target: { value } });

//     expect(holderNameInput.prop("value")).toBe(value);
//   });
// });
