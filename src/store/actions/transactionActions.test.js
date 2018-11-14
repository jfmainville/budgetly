import * as actions from "./transactionActions";
import * as actionTypes from "./actionTypes";

describe("transactionActions", () => {
	it("should execute the fetchTransactionsLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.FETCH_TRANSACTIONS_LOAD,
			loading: bool
		};
		expect(actions.fetchTransactionsLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the fetchTransactionsSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
			transactions: data
		};
		expect(actions.fetchTransactionsSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the fetchTransactionsFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.FETCH_TRANSACTIONS_FAIL,
			error: bool
		};
		expect(actions.fetchTransactionsFail(bool)).toEqual(expectedAction);
	});
	it("should execute the createTransactionLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.CREATE_TRANSACTION_LOAD,
			loading: bool
		};
		expect(actions.createTransactionLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the createTransactionSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.CREATE_TRANSACTION_SUCCESS,
			createTransaction: data
		};
		expect(actions.createTransactionSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the createTransactionFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.CREATE_TRANSACTION_FAIL,
			error: bool
		};
		expect(actions.createTransactionFail(bool)).toEqual(expectedAction);
	});
	it("should execute the updateTransactionLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.UPDATE_TRANSACTION_LOAD,
			loading: bool
		};
		expect(actions.updateTransactionLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the updateTransactionSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.UPDATE_TRANSACTION_SUCCESS,
			updateTransaction: data
		};
		expect(actions.updateTransactionSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the updateTransactionFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.UPDATE_TRANSACTION_FAIL,
			error: bool
		};
		expect(actions.updateTransactionFail(bool)).toEqual(expectedAction);
	});
	it("should execute the deleteTransactionLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.DELETE_TRANSACTION_LOAD,
			loading: bool
		};
		expect(actions.deleteTransactionLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the deleteTransactionSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.DELETE_TRANSACTION_SUCCESS,
			deleteTransaction: data
		};
		expect(actions.deleteTransactionSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the deleteTransactionFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.DELETE_TRANSACTION_FAIL,
			error: bool
		};
		expect(actions.deleteTransactionFail(bool)).toEqual(expectedAction);
	});
	it("should execute the createTransactionRowLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.CREATE_TRANSACTION_ROW_LOAD,
			loading: bool
		};
		expect(actions.createTransactionRowLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the createTransactionRowSuccess action", () => {
		const rowId = 1;
		const transactionId = 1;
		const expectedAction = {
			type: actionTypes.CREATE_TRANSACTION_ROW_SUCCESS,
			rowId: rowId,
			transactionId: transactionId
		};
		expect(actions.createTransactionRowSuccess(rowId, transactionId)).toEqual(
			expectedAction
		);
	});
	it("should execute the deleteTransactionRowLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.DELETE_TRANSACTION_ROW_LOAD,
			loading: bool
		};
		expect(actions.deleteTransactionRowLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the deleteTransactionRowSuccess action", () => {
		const rowId = 1;
		const transactionId = 1;
		const expectedAction = {
			type: actionTypes.DELETE_TRANSACTION_ROW_SUCCESS,
			rowId: rowId,
			transactionId: transactionId
		};
		expect(actions.deleteTransactionRowSuccess(rowId, transactionId)).toEqual(
			expectedAction
		);
	});
});
