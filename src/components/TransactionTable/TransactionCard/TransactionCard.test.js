import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TransactionCard from "./TransactionCard";

configure({ adapter: new Adapter() });

describe("<TransactionCard/>", () => {
	const props = {
		transaction: {
			id: 1,
			enterprise: "Tim Hortons",
			type: "Expense",
			category: "Restaurant",
			total: 920.24
		}
	};
	const location = { pathname: "/accounts" };
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<TransactionCard {...props} location={location} />);
	});

	it("should have one transaction prop object", () => {
		expect(wrapper.props().transaction).toBeDefined();
	});

	afterEach(() => {
		wrapper.unmount();
	});
});
