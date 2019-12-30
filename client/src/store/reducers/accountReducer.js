import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
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
