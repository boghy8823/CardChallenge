import React from "react";
import { mount } from "../../helpers/testHelpers";
import Home from "./index";

describe("Home component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = mount(<Home />);

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it("should handle input field change", () => {
    const { wrapper } =  mount(<Home />);
    const value = "value";
    const nameInput = wrapper.find('input[id="name"]');

    expect(nameInput.prop("value")).toBe("");

    nameInput.simulate("change", { target: { value } });

    expect(wrapper.find('input[id="name"]').prop("value")).toBe(value);
  });
});
