import React from "react";
import { mount } from "../../helpers/testHelpers";
import PaymentMethods from "./index";

describe("Payment methods component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = mount(<PaymentMethods />);

    expect(wrapper.find(PaymentMethods)).toHaveLength(1);
  });
});
