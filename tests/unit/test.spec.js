import { mount } from "@vue/test-utils";
import DarkMode from "../../src/components/DarkMode";

describe("DarkMode", () => {
  const wrapper = mount(DarkMode);
  it("has the button", () => {
    expect(wrapper.contains("a")).toBe(true);
  });
  it("must return the inverse result of the initial value", () => {
      expect(wrapper.vm.darkMode).toBe(false);
      const button = wrapper.find('a')
      button.trigger('click');
      expect(wrapper.vm.darkMode).toBe(true);
  });
});
