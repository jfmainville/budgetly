import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AccountTable from "./AccountTable";
import AccountEnterpriseInput from "./AccountEnterpriseInput/AccountEnterpriseInput";
import AccountCategoryDropdown from "./AccountCategoryDropdown/AccountCategoryDropdown";
import AccountCard from "./AccountCard/AccountCard";
import AccountTypeDropdown from "./AccountTypeDropdown/AccountTypeDropdown";

configure({ adapter: new Adapter() });

describe("<AccountTable/>", () => {
	const props = {
		categories: [
			{ id: 1, title: "Entertainment" },
			{ id: 2, title: "Technology" },
			{ id: 3, title: "Grocery" },
			{ id: 4, title: "Fashion" }
		],
		categorySearchInput: "",
		showCategoryDropdown: false,
		handleCategorySearch: jest.fn(),
		handleClearCategorySearch: jest.fn(),
		handleShowCategoryDropdown: jest.fn(),
		handleCategorySearchSelection: jest.fn(),
		typeSearchInput: "",
		showTypeDropdown: false,
		handleShowTypeDropdown: jest.fn(),
		handleTypeSearch: jest.fn(),
		handleClearTypeSearch: jest.fn(),
		handleTypeSearchSelection: jest.fn()
	};
	const location = { pathname: "/accounts" };
	let wrapper;
	beforeEach(() => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({
			account: {
				accounts: [
					{
						id: 1,
						enterprise: "Tim Hortons",
						type: "Expense",
						category: "Restaurant",
						recurrent: true,
						recurrence: 1,
						payment_date: "2018-11-01",
						payment_amount: 100
					},
					{
						id: 2,
						enterprise: "McDonalds",
						type: "Expense",
						category: "Restaurant",
						recurrent: true,
						recurrence: 2,
						payment_date: "2019-11-01",
						payment_amount: 500
					},
					{
						id: 3,
						enterprise: "Burger King",
						type: "Expense",
						category: "Restaurant",
						recurrent: false,
						recurrence: null,
						payment_date: null,
						payment_amount: null
					},
				]
			}
		});
		wrapper = mount(
			<Provider store={store}>
				<AccountTable store={store} location={location} />
			</Provider>
		)
	});
	it("should show one <AccountEnterpriseInput/> component", () => {
		expect(wrapper.find(AccountEnterpriseInput)).toHaveLength(1);
	});
	it("should show one <AccountTypeDropdown/> component", () => {
		expect(wrapper.find(AccountTypeDropdown)).toHaveLength(1);
	});
	it("should show one <AccountCategoryDropdown/> component", () => {
		expect(wrapper.find(AccountCategoryDropdown)).toHaveLength(1);
	});
	it("should show one <AccountCard/> component", () => {
		expect(wrapper.find(AccountCard)).toHaveLength(3);
	});
});
