import * as actionTypes from "./actionTypes";

export function fetchAccountsLoad(bool) {
	return {
		type: actionTypes.FETCH_ACCOUNTS_LOAD,
		loading: bool
	};
}

export function fetchAccountsSuccess(data) {
	return {
		type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
		accounts: data
	};
}

export function fetchAccountsFail(bool) {
	return {
		type: actionTypes.FETCH_ACCOUNTS_FAIL,
		error: bool
	};
}

export function createAccountLoad(bool) {
	return {
		type: actionTypes.CREATE_ACCOUNT_LOAD,
		loading: bool
	};
}

export function createAccountSuccess(data) {
	return {
		type: actionTypes.CREATE_ACCOUNT_SUCCESS,
		createAccount: data
	};
}

export function createAccountFail(bool) {
	return {
		type: actionTypes.CREATE_ACCOUNT_FAIL,
		error: bool
	};
}

export function updateAccountLoad(bool) {
	return {
		type: actionTypes.UPDATE_ACCOUNT_LOAD,
		loading: bool
	};
}

export function updateAccountSuccess(data) {
	return {
		type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
		updateAccount: data
	};
}

export function updateAccountFail(bool) {
	return {
		type: actionTypes.UPDATE_ACCOUNT_FAIL,
		error: bool
	};
}

export function deleteAccountLoad(bool) {
	return {
		type: actionTypes.DELETE_ACCOUNT_LOAD,
		loading: bool
	};
}

export function deleteAccountSuccess(data) {
	return {
		type: actionTypes.DELETE_ACCOUNT_SUCCESS,
		deleteAccount: data
	};
}

export function deleteAccountFail(bool) {
	return {
		type: actionTypes.DELETE_ACCOUNT_FAIL,
		error: bool
	};
}

export function fetchAccounts(data) {
	return dispatch => {
		dispatch(fetchAccountsSuccess(data));
	};
}

export function updateAccount(data) {
	return dispatch => {
		dispatch(updateAccountSuccess(data));
	};
}

export function deleteAccount(data) {
	return dispatch => {
		dispatch(deleteAccountSuccess(data));
	};
}

export function createAccount(data) {
	return dispatch => {
		dispatch(createAccountSuccess(data));
	};
}
