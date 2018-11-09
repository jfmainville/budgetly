import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TransactionPanel } from "./TransactionPanel";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import moment from "moment";

configure({ adapter: new Adapter() });

describe("<TransactionPanel/>", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<TransactionPanel />);
	});
	it("should have the activeMonth initial state", () => {
		expect(wrapper.state().activeMonth).toBeDefined();
	});
	it("should update the activeMonth state to previous month (handleMonthSelectionPrevious)", () => {
		wrapper.setState({
			activeMonth: moment().format("YYYY-MM")
		});
		wrapper.instance().handleMonthSelectionPrevious();
		const activeMonth = wrapper.state("activeMonth");
		expect(activeMonth).toEqual(
			moment()
				.add(-1, "month")
				.format("YYYY-MM")
		);
	});
	it("should update the activeMonth state to next month (handleMonthSelectionNext)", () => {
		wrapper.setState({
			activeMonth: moment().format("YYYY-MM")
		});
		wrapper.instance().handleMonthSelectionNext();
		const activeMonth = wrapper.state("activeMonth");
		expect(activeMonth).toEqual(
			moment()
				.add(1, "month")
				.format("YYYY-MM")
		);
	});
	it("should show one <Auxiliary/> component", () => {
		expect(wrapper.find(Auxiliary)).toHaveLength(1);
	});
	it("should show one <TransactionTable/> component", () => {
		expect(wrapper.find(TransactionTable)).toHaveLength(1);
	});

	afterEach(() => {
		wrapper.unmount();
	});
});
