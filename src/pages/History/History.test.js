import React from "react";
import { mount } from "../../helpers/testHelpers";
import History from "./index";

describe("History component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = mount(<History />);

    expect(wrapper.find(History)).toHaveLength(1);
  });
});
