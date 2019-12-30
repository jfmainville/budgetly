import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AccountCard from "./AccountCard";

configure({ adapter: new Adapter() });

describe("<AccountCard/>", () => {
	const props = {
		account: {
			id: 1,
			enterprise: "Tim Hortons",
			type: "Expense",
			category: "Restaurant",
			total: 920.24
		},
		transactions: [
			{
				id: 1,
				date: "2018-10-11",
				enterprise: "Tim Hortons",
				type: "Expense",
				category: "Restaurant",
				total: 1000.24
			},
			{
				id: 2,
				date: "2018-09-11",
				enterprise: "McDonalds",
				type: "Expense",
				category: "Restaurant",
				total: 1000.24
			},
		]
	};
	const location = { pathname: "/accounts" };
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<AccountCard {...props} location={location} />);
	});

	it("should have one account prop object", () => {
		expect(wrapper.props().account).toBeDefined();
	});

	it("should have transactions props array", () => {
		expect(wrapper.props().transactions).toBeDefined();
	});

	afterEach(() => {
		wrapper.unmount();
	});
});
