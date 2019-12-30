import * as actionTypes from "./actionTypes";
import { dummyTransactions } from "../../utils/DummyData";

export function fetchTransactionsLoad(bool) {
	return {
		type: actionTypes.FETCH_TRANSACTIONS_LOAD,
		loading: bool
	};
}

export function fetchTransactionsSuccess(data) {
	return {
		type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
		transactions: data
	};
}

export function fetchTransactionsFail(bool) {
	return {
		type: actionTypes.FETCH_TRANSACTIONS_FAIL,
		error: bool
	};
}

export function createTransactionLoad(bool) {
	return {
		type: actionTypes.CREATE_TRANSACTION_LOAD,
		loading: bool
	};
}

export function createTransactionSuccess(data) {
	return {
		type: actionTypes.CREATE_TRANSACTION_SUCCESS,
		createTransaction: data
	};
}

export function createTransactionFail(bool) {
	return {
		type: actionTypes.CREATE_TRANSACTION_FAIL,
		error: bool
	};
}

export function updateTransactionLoad(bool) {
	return {
		type: actionTypes.UPDATE_TRANSACTION_LOAD,
		loading: bool
	};
}

export function updateTransactionSuccess(data) {
	return {
		type: actionTypes.UPDATE_TRANSACTION_SUCCESS,
		updateTransaction: data
	};
}

export function updateTransactionFail(bool) {
	return {
		type: actionTypes.UPDATE_TRANSACTION_FAIL,
		error: bool
	};
}

export function deleteTransactionLoad(bool) {
	return {
		type: actionTypes.DELETE_TRANSACTION_LOAD,
		loading: bool
	};
}

export function deleteTransactionSuccess(data) {
	return {
		type: actionTypes.DELETE_TRANSACTION_SUCCESS,
		deleteTransaction: data
	};
}

export function deleteTransactionFail(bool) {
	return {
		type: actionTypes.DELETE_TRANSACTION_FAIL,
		error: bool
	};
}

export function createTransactionRowLoad(bool) {
	return {
		type: actionTypes.CREATE_TRANSACTION_ROW_LOAD,
		loading: bool
	};
}

export function createTransactionRowSuccess(rowId, transactionId) {
	return {
		type: actionTypes.CREATE_TRANSACTION_ROW_SUCCESS,
		rowId: rowId,
		transactionId: transactionId
	};
}

export function deleteTransactionRowLoad(bool) {
	return {
		type: actionTypes.DELETE_TRANSACTION_ROW_LOAD,
		loading: bool
	};
}

export function deleteTransactionRowSuccess(rowId, transactionId) {
	return {
		type: actionTypes.DELETE_TRANSACTION_ROW_SUCCESS,
		rowId: rowId,
		transactionId: transactionId
	};
}

export function fetchTransactions() {
	return dispatch => {
		dispatch(fetchTransactionsSuccess(dummyTransactions));
	};
}

export function updateTransaction(data) {
	return dispatch => {
		dispatch(updateTransactionSuccess(data));
	};
}

export function deleteTransaction(data) {
	return dispatch => {
		dispatch(deleteTransactionSuccess(data));
	};
}

export function createTransaction(data) {
	return dispatch => {
		dispatch(createTransactionSuccess(data));
	};
}

export function createTransactionRow(rowId, transactionId) {
	return dispatch => {
		dispatch(createTransactionRowSuccess(rowId, transactionId));
	};
}

export function deleteTransactionRow(rowId, transactionId) {
	return dispatch => {
		dispatch(deleteTransactionRowSuccess(rowId, transactionId));
	};
}
