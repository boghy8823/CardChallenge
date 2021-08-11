import React from "react";
import Input from "./index";

import { mount } from "../../helpers/testHelpers";

const defaultProps = {
  onChange: () => {},
  id: "id",
};

const setup = (props) => mount(<Input {...defaultProps} {...props} />);

describe("Input component", () => {
  it("should represent the Input component mounted", () => {
    const { wrapper } = setup();

    expect(wrapper.find("Input")).toHaveLength(1);
  });

  it("should handle value change", () => {
    const onChange = jest.fn();
    const event = { name: "name", value: "Test" };
    const { wrapper } = setup({ onChange });

    expect(wrapper.find("Input")).toHaveLength(1);

    expect(onChange).toHaveBeenCalledTimes(0);

    expect(wrapper.find("Input").prop("value")).toBe("");

    wrapper.find("Input").props().onChange(event);

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(onChange).toHaveBeenCalledWith(event);
  });

  it("should not be disabled by default", () => {
    const { wrapper } = setup();

    expect(wrapper.find("Input").prop("disabled")).toBe(false);
  });

  it("should represent a disabled input", () => {
    const { wrapper } = setup({ disabled: true });

    expect(wrapper.find("Input").prop("disabled")).toBe(true);
  });
});
