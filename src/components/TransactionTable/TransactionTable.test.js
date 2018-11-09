import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TransactionTable from "./TransactionTable";
import moment from "moment";

configure({ adapter: new Adapter() });

describe("<TransactionTable/>", () => {
	const props = {
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
			{
				id: 3,
				date: "2018-08-11",
				enterprise: "Burger King",
				type: "Expense",
				category: "Restaurant",
				total: 1000.24
			},
			{
				id: 4,
				date: "2018-10-11",
				enterprise: "Netflix",
				type: "Expense",
				category: "Entertainment",
				total: 1000.24
			},
			{
				id: 5,
				date: "2018-10-11",
				enterprise: "Metro",
				type: "Expense",
				category: "Grocery",
				total: 1000.24
			},
			{
				id: 6,
				date: "2018-10-11",
				enterprise: "IGA",
				type: "Expense",
				category: "Grocery",
				total: 1000.24
			}
		],
		activeMonth: moment().format("YYYY-MM")
	};
	const location = { pathname: "/accounts" };
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<TransactionTable {...props} location={location} />);
	});
	it("should contain the transactions array", () => {
		expect(props.transactions).toEqual(
			expect.arrayContaining(props.transactions)
		);
	});
	it("should contain the activeMonth string", () => {
		expect(props.activeMonth).toEqual(props.activeMonth);
	});
	afterEach(() => {
		wrapper.unmount();
	});
});
