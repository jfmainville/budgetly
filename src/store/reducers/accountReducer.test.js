import reducer from "./AccountReducer";

describe("accountReducer", () => {
	it("should return the reducer initial state", () => {
		expect(reducer(undefined, {})).toEqual({
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
				{
					id: 4,
					enterprise: "Netflix",
					type: "Expense",
					category: "Entertainment",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 5,
					enterprise: "Metro",
					type: "Expense",
					category: "Grocery",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 6,
					enterprise: "IGA",
					type: "Expense",
					category: "Grocery",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 7,
					enterprise: "Pacini",
					type: "Expense",
					category: "Restaurant",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 8,
					enterprise: "Cineplex Odeon",
					type: "Expense",
					category: "Entertainment",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 9,
					enterprise: "Desjardins",
					type: "Expense",
					category: "Bank",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 10,
					enterprise: "Services Conseils Franc-Jeu",
					type: "Income",
					category: "Revenue",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 11,
					enterprise: "STM",
					type: "Expense",
					category: "Transport",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 12,
					enterprise: "Nissan",
					type: "Expense",
					category: "Automobile",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 13,
					enterprise: "Cinema Guzzo",
					type: "Expense",
					category: "Entertainment",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 14,
					enterprise: "Maxi",
					type: "Expense",
					category: "Grocery",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 15,
					enterprise: "Couche Tard",
					type: "Expense",
					category: "Grocery",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 16,
					enterprise: "Pizza Pizza",
					type: "Expense",
					category: "Restaurant",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 17,
					enterprise: "Pizza Hut",
					type: "Expense",
					category: "Restaurant",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 18,
					enterprise: "Decathlon",
					type: "Expense",
					category: "Sport",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 19,
					enterprise: "Forever 21",
					type: "Expense",
					category: "Fashion",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 20,
					enterprise: "Amazon",
					type: "Expense",
					category: "Technology",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 21,
					enterprise: "Newegg",
					type: "Expense",
					category: "Technology",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 22,
					enterprise: "H & M",
					type: "Expense",
					category: "Fashion",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 23,
					enterprise: "Wal-Mart",
					type: "Expense",
					category: "Grocery",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				},
				{
					id: 24,
					enterprise: "Garage S & M",
					type: "Expense",
					category: "Automobile",
					recurrent: false,
					recurrence: null,
					payment_date: null,
					payment_amount: null
				}
			],
			loading: false,
			error: false,
			rowId: null,
			accountId: null
		});
	});
});
