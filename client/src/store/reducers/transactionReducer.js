import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
	transactions: [],
	loading: false,
	error: false,
	rowId: null,
	transactionId: null
};

const fetchTransactionsLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const fetchTransactionsSuccess = (state, action) => {
	const transactions = action.transactions;
	return updateObject(state, { transactions: transactions });
};

const fetchTransactionsFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const createTransactionLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const createTransactionSuccess = (state, action) => {
	let transactions = [...state.transactions];
	transactions.push(action.createTransaction);
	return updateObject(state, { transactions: transactions });
};

const createTransactionFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const updateTransactionLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const updateTransactionSuccess = (state, action) => {
	const transactions = [...state.transactions];
	const transactionIndex = transactions
		.map(transaction => transaction.id)
		.indexOf(action.updateTransaction.id);
	transactions.splice(transactionIndex, 1, action.updateTransaction);
	return updateObject(state, { transactions: transactions });
};

const updateTransactionFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

const deleteTransactionLoad = (state, action) => {
	return updateObject(state, { loading: action.loading });
};

const deleteTransactionSuccess = (state, action) => {
	let transactions = [...state.transactions];
	let updatedTransactions = transactions.filter(
		transaction => transaction.id !== action.deleteTransaction
	);
	return updateObject(state, { transactions: updatedTransactions });
};

const deleteTransactionFail = (state, action) => {
	return updateObject(state, { error: action.error });
};

export function createTransactionRowLoad(state, action) {
	return updateObject(state, {
		loading: action.loading
	});
}

export function createTransactionRowSuccess(state, action) {
	const transactions = [...state.transactions];
	transactions.splice(action.rowId, 0, {
		id: action.transactionId,
		date: "2018-10-10",
		enterprise: "Zulu"
	});
	return updateObject(state, {
		transactions: transactions
	});
}

export function deleteTransactionRowLoad(state, action) {
	return updateObject(state, {
		loading: action.loading
	});
}

export function deleteTransactionRowSuccess(state, action) {
	const transactions = [...state.transactions];
	transactions.splice(action.rowId, 1);
	return updateObject(state, {
		transactions: transactions
	});
}

const transactionReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_TRANSACTIONS_LOAD:
			return fetchTransactionsLoad(state, action);
		case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
			return fetchTransactionsSuccess(state, action);
		case actionTypes.FETCH_TRANSACTIONS_FAIL:
			return fetchTransactionsFail(state, action);
		case actionTypes.CREATE_TRANSACTION_LOAD:
			return createTransactionLoad(state, action);
		case actionTypes.CREATE_TRANSACTION_SUCCESS:
			return createTransactionSuccess(state, action);
		case actionTypes.CREATE_TRANSACTION_FAIL:
			return createTransactionFail(state, action);
		case actionTypes.UPDATE_TRANSACTION_LOAD:
			return updateTransactionLoad(state, action);
		case actionTypes.UPDATE_TRANSACTION_SUCCESS:
			return updateTransactionSuccess(state, action);
		case actionTypes.UPDATE_TRANSACTION_FAIL:
			return updateTransactionFail(state, action);
		case actionTypes.DELETE_TRANSACTION_LOAD:
			return deleteTransactionLoad(state, action);
		case actionTypes.DELETE_TRANSACTION_SUCCESS:
			return deleteTransactionSuccess(state, action);
		case actionTypes.DELETE_TRANSACTION_FAIL:
			return deleteTransactionFail(state, action);
		case actionTypes.CREATE_TRANSACTION_ROW_LOAD:
			return createTransactionRowLoad(state, action);
		case actionTypes.CREATE_TRANSACTION_ROW_SUCCESS:
			return createTransactionRowSuccess(state, action);
		case actionTypes.DELETE_TRANSACTION_ROW_LOAD:
			return deleteTransactionRowLoad(state, action);
		case actionTypes.DELETE_TRANSACTION_ROW_SUCCESS:
			return deleteTransactionRowSuccess(state, action);
		default:
			return state;
	}
};

export default transactionReducer;
