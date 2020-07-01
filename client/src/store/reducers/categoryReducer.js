import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    categories: [],
    loading: false,
    error: false,
    rowId: null
};

const fetchCategoriesLoad = (state, action) => {
    return updateObject(state, { loading: action.loading });
};

const fetchCategoriesSuccess = (state, action) => {
    const categories = action.categories;
    return updateObject(state, { categories: categories });
};

const fetchCategoriesFail = (state, action) => {
    return updateObject(state, { error: action.error });
};

const createCategoryLoad = (state, action) => {
    return updateObject(state, { loading: action.loading });
};

const createCategorySuccess = (state, action) => {
    let categories = [...state.categories];
    categories.push(action.createCategory);
    return updateObject(state, { categories: categories });
};

const createCategoryFail = (state, action) => {
    return updateObject(state, { error: action.error });
};

const updateCategoryLoad = (state, action) => {
    return updateObject(state, { loading: action.loading });
};

const updateCategorySuccess = (state, action) => {
    const categories = [...state.categories];
    const categoryIndex = categories
        .map(category => category.id)
        .indexOf(action.updateCategory.id);
    categories.splice(categoryIndex, 1, action.updateCategory);
    return updateObject(state, { categories: categories });
};

const updateCategoryFail = (state, action) => {
    return updateObject(state, { error: action.error });
};

const deleteCategoryLoad = (state, action) => {
    return updateObject(state, { loading: action.loading });
};

const deleteCategorySuccess = (state, action) => {
    let categories = [...state.categories];
    let updatedCategories = categories.filter(
        category => category.id !== action.deleteCategory
    );
    return updateObject(state, { categories: updatedCategories });
};

const deleteCategoryFail = (state, action) => {
    return updateObject(state, { error: action.error });
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_LOAD:
            return fetchCategoriesLoad(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS:
            return fetchCategoriesSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAIL:
            return fetchCategoriesFail(state, action);
        case actionTypes.CREATE_CATEGORY_LOAD:
            return createCategoryLoad(state, action);
        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return createCategorySuccess(state, action);
        case actionTypes.CREATE_CATEGORY_FAIL:
            return createCategoryFail(state, action);
        case actionTypes.UPDATE_CATEGORY_LOAD:
            return updateCategoryLoad(state, action);
        case actionTypes.UPDATE_CATEGORY_SUCCESS:
            return updateCategorySuccess(state, action);
        case actionTypes.UPDATE_CATEGORY_FAIL:
            return updateCategoryFail(state, action);
        case actionTypes.DELETE_CATEGORY_LOAD:
            return deleteCategoryLoad(state, action);
        case actionTypes.DELETE_CATEGORY_SUCCESS:
            return deleteCategorySuccess(state, action);
        case actionTypes.DELETE_CATEGORY_FAIL:
            return deleteCategoryFail(state, action);
        default:
            return state;
    }
};

export default categoryReducer;
