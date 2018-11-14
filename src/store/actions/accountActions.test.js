import * as actions from "./accountActions";
import * as actionTypes from "./actionTypes";

describe("accountActions", () => {
	it("should execute the fetchAccountsLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.FETCH_ACCOUNTS_LOAD,
			loading: bool
		};
		expect(actions.fetchAccountsLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the fetchAccountsSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
			transactions: data
		};
		expect(actions.fetchAccountsSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the fetchAccountsFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.FETCH_ACCOUNTS_FAIL,
			error: bool
		};
		expect(actions.fetchAccountsFail(bool)).toEqual(expectedAction);
	});
	it("should execute the createAccountLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.CREATE_ACCOUNT_LOAD,
			loading: bool
		};
		expect(actions.createAccountLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the createAccountSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.CREATE_ACCOUNT_SUCCESS,
			createAccount: data
		};
		expect(actions.createAccountSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the createAccountFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.CREATE_ACCOUNT_FAIL,
			error: bool
		};
		expect(actions.createAccountFail(bool)).toEqual(expectedAction);
	});
	it("should execute the updateAccountLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.UPDATE_ACCOUNT_LOAD,
			loading: bool
		};
		expect(actions.updateAccountLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the updateAccountSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
			updateAccount: data
		};
		expect(actions.updateAccountSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the updateAccountFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.UPDATE_ACCOUNT_FAIL,
			error: bool
		};
		expect(actions.updateAccountFail(bool)).toEqual(expectedAction);
	});
	it("should execute the deleteAccountLoad action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.DELETE_ACCOUNT_LOAD,
			loading: bool
		};
		expect(actions.deleteAccountLoad(bool)).toEqual(expectedAction);
	});
	it("should execute the deleteAccountSuccess action", () => {
		const data = "transactions";
		const expectedAction = {
			type: actionTypes.DELETE_ACCOUNT_SUCCESS,
			deleteAccount: data
		};
		expect(actions.deleteAccountSuccess(data)).toEqual(expectedAction);
	});
	it("should execute the deleteAccountFail action", () => {
		const bool = true;
		const expectedAction = {
			type: actionTypes.DELETE_ACCOUNT_FAIL,
			error: bool
		};
		expect(actions.deleteAccountFail(bool)).toEqual(expectedAction);
	});
});
