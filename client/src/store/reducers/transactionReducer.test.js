import reducer from "./transactionReducer";

describe("transactionReducer", () => {
	it("should return the reducer initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			transactions: [],
			loading: false,
			error: false,
			rowId: null,
			transactionId: null
		});
	});
});
