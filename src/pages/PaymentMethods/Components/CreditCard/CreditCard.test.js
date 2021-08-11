import React from "react";
import { mount } from "../../../../helpers/testHelpers";
import Button from "../../../../components/Button";
import CreditCard from "./index";

const sampleCard = {
  holderName: "TEST2222asdas",
  cardNumber: "4444 3333 2222 1111",
  expirationDate: "1111",
  cvc: "222",
  id: 1622522170190,
};

const defaultProps = {
  holderName: sampleCard.holderName,
  cardNumber: sampleCard.cardNumber,
  expirationDate: sampleCard.expirationDate,
  cvc: sampleCard.cvc,
};

const setup = (props) => mount(<CreditCard {...defaultProps} {...props} />);

describe("Credit card component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = setup();

    expect(wrapper.find(CreditCard)).toHaveLength(1);
  });

  it("should represent the card input fields with populated data", () => {
    const { wrapper } = setup();

    expect(wrapper.find('Typography[data-test="cvc-code"]').text()).toBe(
      sampleCard.cvc
    );
    expect(wrapper.find('Typography[data-test="expiration-code"]').text()).toBe(
      sampleCard.expirationDate
    );
    expect(wrapper.find('Typography[data-test="holder-name"]').text()).toBe(
      sampleCard.holderName
    );
    expect(wrapper.find('Typography[data-test="card-number"]').text()).toBe(
      sampleCard.cardNumber
    );
  });

  it("should display edit button if editable flag is set", () => {
    const { wrapper } = setup({ editable: true });

    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should not display edit button by default", () => {
    const { wrapper } = setup();

    expect(wrapper.find(Button)).toHaveLength(0);
  });
});
