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
				},
				{
					id: 2,
					enterprise: "McDonalds",
					type: "Expense",
					category: "Restaurant",
				},
				{
					id: 3,
					enterprise: "Burger King",
					type: "Expense",
					category: "Restaurant",
				},
				{
					id: 4,
					enterprise: "Netflix",
					type: "Expense",
					category: "Entertainment",
				},
				{
					id: 5,
					enterprise: "Metro",
					type: "Expense",
					category: "Grocery",
				},
				{
					id: 6,
					enterprise: "IGA",
					type: "Expense",
					category: "Grocery",
				},
				{
					id: 7,
					enterprise: "Pacini",
					type: "Expense",
					category: "Restaurant",
				},
				{
					id: 8,
					enterprise: "Cineplex Odeon",
					type: "Expense",
					category: "Entertainment",
				},
				{
					id: 9,
					enterprise: "Desjardins",
					type: "Expense",
					category: "Bank",
				},
				{
					id: 10,
					enterprise: "Services Conseils Franc-Jeu",
					type: "Income",
					category: "Revenue",
				},
				{
					id: 11,
					enterprise: "STM",
					type: "Expense",
					category: "Transport",
				},
				{
					id: 12,
					enterprise: "Nissan",
					type: "Expense",
					category: "Automobile",
				},
				{
					id: 13,
					enterprise: "Cinema Guzzo",
					type: "Expense",
					category: "Entertainment",
				},
				{
					id: 14,
					enterprise: "Maxi",
					type: "Expense",
					category: "Grocery",
				},
				{
					id: 15,
					enterprise: "Couche Tard",
					type: "Expense",
					category: "Grocery",
				},
				{
					id: 16,
					enterprise: "Pizza Pizza",
					type: "Expense",
					category: "Restaurant",
				},
				{
					id: 17,
					enterprise: "Pizza Hut",
					type: "Expense",
					category: "Restaurant",
				},
				{
					id: 18,
					enterprise: "Decathlon",
					type: "Expense",
					category: "Sport",
				},
				{
					id: 19,
					enterprise: "Forever 21",
					type: "Expense",
					category: "Fashion",
				},
				{
					id: 20,
					enterprise: "Amazon",
					type: "Expense",
					category: "Technology",
				},
				{
					id: 21,
					enterprise: "Newegg",
					type: "Expense",
					category: "Technology",
				},
				{
					id: 22,
					enterprise: "H & M",
					type: "Expense",
					category: "Fashion",
				},
				{
					id: 23,
					enterprise: "Wal-Mart",
					type: "Expense",
					category: "Grocery",
				},
				{
					id: 24,
					enterprise: "Garage S & M",
					type: "Expense",
					category: "Automobile",
				}
			],
			loading: false,
			error: false,
			rowId: null,
			accountId: null
		});
	});
});
