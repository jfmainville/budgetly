import reducer from "./CategoryReducer";

describe("categoryReducer", () => {
    it("should return the reducer initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            categories: [],
            loading: false,
            error: false,
            rowId: null
        });
    });
});
