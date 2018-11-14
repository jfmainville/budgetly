import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AccountCategoryDropdown from "./AccountCategoryDropdown";

configure({ adapter: new Adapter() });

describe("<AccountCategoryDropdown/>", () => {
	const props = {
		categories: [
			{ id: 1, title: "Entertainment" },
			{ id: 2, title: "Technology" },
			{ id: 3, title: "Grocery" },
			{ id: 4, title: "Fashion" }
		],
		handleShowCategoryDropdown: jest.fn(),
		handleCategorySearch: jest.fn(),
		handleClearCategorySearch: jest.fn(),
		handleCategorySearchSelection: jest.fn(),
		categorySearchInput: ""
	};
	const location = { pathname: "/accounts" };
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<AccountCategoryDropdown {...props} location={location} />);
	});

	it("should execute the handleShowCategoryDropdown function on click", () => {
		wrapper.find(".CategoryDropdownButton").simulate("click");
		expect(props.handleShowCategoryDropdown).toHaveBeenCalledTimes(1);
	});
	it("should execute handleCategorySearch function on category search input", () => {
		wrapper.find(".CategoryDropdownInput").simulate("change", {
			target: {
				value: "categorySearchInput"
			}
		});
		expect(props.handleCategorySearch).toHaveBeenCalledTimes(1);
	});
	it("should execute the handleClearCategorySearch function on click", () => {
		wrapper.find(".CategoryDropdownClearButton").simulate("click");
		expect(props.handleClearCategorySearch).toHaveBeenCalledTimes(1);
	});

	afterEach(() => {
		wrapper.unmount();
	});
});
