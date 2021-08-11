import React from "react";
import Button, { ButtonProperties } from "./index";
import { mount } from "../../helpers/testHelpers";

describe("Button component", () => {
  it("should represent the button component mounted", () => {
    const { wrapper } = mount(<Button />);

    expect(wrapper.find("Button")).toHaveLength(1);
  });

  it("should represent correct variant of button", () => {
    ButtonProperties.buttonVariants.forEach((variant) => {
      const { wrapper } = mount(<Button variant={variant} />);

      expect(wrapper.find("Button").prop("variant")).toBe(variant);
    });
  });

  it("should represent a button not disabled by default", () => {
    const { wrapper } = mount(<Button />);

    expect(wrapper.find("Button").prop("disabled")).toBe(false);
  });

  it("should represent a disabled button", () => {
    const { wrapper } = mount(<Button disabled />);

    expect(wrapper.find("Button").prop("disabled")).toBe(true);
  });

  it("should handle a click action", () => {
    const onClick = jest.fn();
    const { wrapper } = mount(<Button onClick={onClick} />);

    expect(onClick).toHaveBeenCalledTimes(0);

    wrapper.find(`Button`).simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
