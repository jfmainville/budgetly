import * as actionTypes from "./actionTypes";
import { dummyCategories } from "../../utils/DummyData";

export function fetchCategoriesLoad(bool) {
    return {
        type: actionTypes.FETCH_CATEGORIES_LOAD,
        loading: bool
    };
}

export function fetchCategoriesSuccess(data) {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: data
    };
}

export function fetchCategoriesFail(bool) {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: bool
    };
}

export function createCategoryLoad(bool) {
    return {
        type: actionTypes.CREATE_CATEGORY_LOAD,
        loading: bool
    };
}

export function createCategorySuccess(data) {
    return {
        type: actionTypes.CREATE_CATEGORY_SUCCESS,
        createCategory: data
    };
}

export function createCategoryFail(bool) {
    return {
        type: actionTypes.CREATE_CATEGORY_FAIL,
        error: bool
    };
}

export function updateCategoryLoad(bool) {
    return {
        type: actionTypes.UPDATE_CATEGORY_LOAD,
        loading: bool
    };
}

export function updateCategorySuccess(data) {
    return {
        type: actionTypes.UPDATE_CATEGORY_SUCCESS,
        updateCategory: data
    };
}

export function updateCategoryFail(bool) {
    return {
        type: actionTypes.UPDATE_CATEGORY_FAIL,
        error: bool
    };
}

export function deleteCategoryLoad(bool) {
    return {
        type: actionTypes.DELETE_CATEGORY_LOAD,
        loading: bool
    };
}

export function deleteCategorySuccess(data) {
    return {
        type: actionTypes.DELETE_CATEGORY_SUCCESS,
        deleteCategory: data
    };
}

export function deleteCategoryFail(bool) {
    return {
        type: actionTypes.DELETE_CATEGORY_FAIL,
        error: bool
    };
}

export function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesSuccess(dummyCategories));
    };
}

export function updateCategory(data) {
    return dispatch => {
        dispatch(updateCategorySuccess(data));
    };
}

export function deleteCategory(data) {
    return dispatch => {
        dispatch(deleteCategorySuccess(data));
    };
}

export function createCategory(data) {
    return dispatch => {
        dispatch(createCategorySuccess(data));
    };
}
