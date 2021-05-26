import React from "react";
import { mount } from "../../helpers/testHelpers";
import Cards from "./index";

describe("Cards component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = mount(<Cards />);

    expect(wrapper.find(Cards)).toHaveLength(1);
  });
});
