import * as actions from "./categoryActions";
import * as actionTypes from "./actionTypes";

describe("categoryActions", () => {
    it("should execute the fetchCategoriesLoad action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.FETCH_CATEGORIES_LOAD,
            loading: bool
        };
        expect(actions.fetchCategoriesLoad(bool)).toEqual(expectedAction);
    });
    it("should execute the fetchCategoriesSuccess action", () => {
        const data = "categories";
        const expectedAction = {
            type: actionTypes.FETCH_CATEGORIES_SUCCESS,
            categories: data
        };
        expect(actions.fetchCategoriesSuccess(data)).toEqual(expectedAction);
    });
    it("should execute the fetchCategoriesFail action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.FETCH_CATEGORIES_FAIL,
            error: bool
        };
        expect(actions.fetchCategoriesFail(bool)).toEqual(expectedAction);
    });
    it("should execute the createCategoryLoad action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.CREATE_CATEGORY_LOAD,
            loading: bool
        };
        expect(actions.createCategoryLoad(bool)).toEqual(expectedAction);
    });
    it("should execute the createCategorySuccess action", () => {
        const data = "categories";
        const expectedAction = {
            type: actionTypes.CREATE_CATEGORY_SUCCESS,
            createCategory: data
        };
        expect(actions.createCategorySuccess(data)).toEqual(expectedAction);
    });
    it("should execute the createCategoryFail action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.CREATE_CATEGORY_FAIL,
            error: bool
        };
        expect(actions.createCategoryFail(bool)).toEqual(expectedAction);
    });
    it("should execute the updateCategoryLoad action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.UPDATE_CATEGORY_LOAD,
            loading: bool
        };
        expect(actions.updateCategoryLoad(bool)).toEqual(expectedAction);
    });
    it("should execute the updateCategorySuccess action", () => {
        const data = "categories";
        const expectedAction = {
            type: actionTypes.UPDATE_CATEGORY_SUCCESS,
            updateCategory: data
        };
        expect(actions.updateCategorySuccess(data)).toEqual(expectedAction);
    });
    it("should execute the updateCategoryFail action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.UPDATE_CATEGORY_FAIL,
            error: bool
        };
        expect(actions.updateCategoryFail(bool)).toEqual(expectedAction);
    });
    it("should execute the deleteCategoryLoad action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.DELETE_CATEGORY_LOAD,
            loading: bool
        };
        expect(actions.deleteCategoryLoad(bool)).toEqual(expectedAction);
    });
    it("should execute the deleteCategorySuccess action", () => {
        const data = "categories";
        const expectedAction = {
            type: actionTypes.DELETE_CATEGORY_SUCCESS,
            deleteCategory: data
        };
        expect(actions.deleteCategorySuccess(data)).toEqual(expectedAction);
    });
    it("should execute the deleteCategoryFail action", () => {
        const bool = true;
        const expectedAction = {
            type: actionTypes.DELETE_CATEGORY_FAIL,
            error: bool
        };
        expect(actions.deleteCategoryFail(bool)).toEqual(expectedAction);
    });
});
