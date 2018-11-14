import reducer from "./transactionReducer";

describe("transactionReducer", () => {
	it("should return the reducer initial state", () => {
		expect(reducer(undefined, {})).toEqual({
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
			loading: false,
			error: false,
			rowId: null,
			transactionId: null
		});
	});
});
