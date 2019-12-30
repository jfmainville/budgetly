import reducer from "./AccountReducer";

describe("accountReducer", () => {
	it("should return the reducer initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			accounts: [],
			loading: false,
			error: false,
			rowId: null,
			accountId: null
		});
	});
});
