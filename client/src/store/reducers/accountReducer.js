import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
	accounts: [],
	loading: false,
	error: false,
	rowId: null,
	accountId: null
};

const fetchAccountsLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const fetchAccountsSuccess = (state, action) => {
	const accounts = action.accounts;
	return updateObject(state, { accounts: accounts });
};

const fetchAccountsFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const createAccountLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const createAccountSuccess = (state, action) => {
	let accounts = [...state.accounts];
	accounts.splice(action.rowId, 1, action.createAccount);
	return updateObject(state, { accounts: accounts });
};

const createAccountFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const updateAccountLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const updateAccountSuccess = (state, action) => {
	const accounts = [...state.accounts];
	const accountIndex = accounts
		.map(account => account.id)
		.indexOf(action.updateAccount.id);
	accounts.splice(accountIndex, 1, action.updateAccount);
	return updateObject(state, { accounts: accounts });
};

const updateAccountFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const deleteAccountLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const deleteAccountSuccess = (state, action) => {
	let accounts = [...state.accounts];
	let updatedAccounts = accounts.filter(
		account => account.id !== action.deleteAccount
	);
	return updateObject(state, { accounts: updatedAccounts });
};

const deleteAccountFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const accountReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_ACCOUNTS_LOAD:
			return fetchAccountsLoad(state, action);
		case actionTypes.FETCH_ACCOUNTS_SUCCESS:
			return fetchAccountsSuccess(state, action);
		case actionTypes.FETCH_ACCOUNTS_FAIL:
			return fetchAccountsFail(state, action);
		case actionTypes.CREATE_ACCOUNT_LOAD:
			return createAccountLoad(state, action);
		case actionTypes.CREATE_ACCOUNT_SUCCESS:
			return createAccountSuccess(state, action);
		case actionTypes.CREATE_ACCOUNT_FAIL:
			return createAccountFail(state, action);
		case actionTypes.UPDATE_ACCOUNT_LOAD:
			return updateAccountLoad(state, action);
		case actionTypes.UPDATE_ACCOUNT_SUCCESS:
			return updateAccountSuccess(state, action);
		case actionTypes.UPDATE_ACCOUNT_FAIL:
			return updateAccountFail(state, action);
		case actionTypes.DELETE_ACCOUNT_LOAD:
			return deleteAccountLoad(state, action);
		case actionTypes.DELETE_ACCOUNT_SUCCESS:
			return deleteAccountSuccess(state, action);
		case actionTypes.DELETE_ACCOUNT_FAIL:
			return deleteAccountFail(state, action);
		default:
			return state;
	}
};

export default accountReducer;
