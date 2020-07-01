import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import PropTypes from "prop-types";
import classes from "./AccountPanel.module.scss";
import AccountCard from "./AccountCard/AccountCard";
import SearchableDropdown from "../UI/SearchableDropdown/SearchableDropdown";
import InputField from "../UI/InputField/InputField";

const accountPanel = () => {
	const accounts = useSelector(state => state.account.accounts);
	const transactions = useSelector(state => state.transaction.transactions);
	const categories = useSelector(state => state.category.categories);
	const dispatch = useDispatch();
	const types = [
		{ "id": 1, "name": "Expense" },
		{ "id": 2, "name": "Income" }
	];
	const [enterpriseInput, setEnterpriseInput] = useState("");
	const [enterpriseInputSelection, setEnterpriseInputSelection] = useState("");
	const [enterpriseInputUpdate, setEnterpriseInputUpdate] = useState("");
	const [categorySearchInput, setCategorySearchInput] = useState("");
	const [typeSearchInput, setTypeSearchInput] = useState("");
	const [accountCardTypeDropdownShowDropdown, setAccountCardTypeDropdownShowDropdown] = useState("");
	const [accountCardCategoryDropdownShowDropdown, setAccountCardCategoryDropdownShowDropdown] = useState("");

	useEffect(() => {
		dispatch(actions.fetchAccounts());
		dispatch(actions.fetchCategories());
	}, []);

	const handleInputSelection = (item) => {
		setEnterpriseInput(item);
		if (enterpriseInputUpdate) {
			handleAccountUpdate();
		}
	};

	const handleEnterpriseInputSelection = (account) => {
		if (!enterpriseInputSelection) {
			setEnterpriseInputSelection(account);
		} else {
			if (enterpriseInputUpdate) {
				handleAccountUpdate();
			}
			setEnterpriseInputSelection("");
		}
	};

	const handleEnterpriseInputUpdate = event => {
		setEnterpriseInputUpdate(event.target.value);
	};

	const handleAccountCardTypeDropdownShowDropdown = (account) => {
		setAccountCardTypeDropdownShowDropdown(account);
	};

	const handleAccountCardCategoryDropdownShowDropdown = (account) => {
		setAccountCardCategoryDropdownShowDropdown(account);
	};

	const handleDropdownItemSearch = (itemType, data) => {
		if (itemType === "Type") {
			setTypeSearchInput(data);
		}
		if (itemType === "Category") {
			setCategorySearchInput(data);
		}
	};

	const handleDropdownItemSelection = (itemType, item) => {
		if (itemType === "Type") {
			setTypeSearchInput(item.name);
		}
		if (itemType === "Category") {
			setCategorySearchInput(item.name);
		}
	};

	const handleAccountCreate = () => {
		let data = {};
		if (accounts) {
			if (enterpriseInput && typeSearchInput && categorySearchInput) {
				data.id = Math.max.apply(Math, accounts.map(account => account.id)) + 1;
				data.enterprise = enterpriseInput;
				data.type = typeSearchInput;
				data.category = categorySearchInput;
				dispatch(actions.createAccount(data));
			}
		} else {
			if (enterpriseInput && typeSearchInput && categorySearchInput) {
				data.id = 1;
				data.enterprise = enterpriseInput;
				data.type = typeSearchInput;
				data.category = categorySearchInput;
				dispatch(actions.createAccount(data));
			}
		}
		setEnterpriseInput("");
		setTypeSearchInput("");
		setCategorySearchInput("");
	};

	const handleAccountUpdate = (account, type, category) => {
		let data = {};
		if (enterpriseInputSelection) {
			data.id = enterpriseInputSelection.id;
			data.enterprise = enterpriseInputUpdate;
			data.type = enterpriseInputSelection.type;
			data.category = enterpriseInputSelection.category;
			dispatch(actions.updateAccount(data));
			setEnterpriseInputUpdate("");
		}
		if (account && type) {
			data.id = account.id;
			data.enterprise = account.enterprise;
			data.type = type;
			data.category = account.category;
			dispatch(actions.updateAccount(data));
			setAccountCardTypeDropdownShowDropdown("");
		}
		if (account && category) {
			data.id = account.id;
			data.enterprise = account.enterprise;
			data.type = account.type;
			data.category = category.name;
			dispatch(actions.updateAccount(data));
			setAccountCardCategoryDropdownShowDropdown("");
		}
	};

	const handleAccountDelete = (account) => {
		let data = {};
		if (account.id) {
			data = account.id;
			dispatch(actions.deleteAccount(data));
		}
	};

	const sortedAccounts = accounts.sort((a, b) => {
		const textA = a.enterprise.toLowerCase();
		const textB = b.enterprise.toLowerCase();
		return textA < textB ? -1 : textA > textB ? 1 : 0;
	});

	return (
		<React.Fragment>
			<div className={classes.NewAccountSection}>
				<InputField
					inputData={enterpriseInput}
					placeHolder="Enterprise"
					handleInputSelection={handleInputSelection}
				/>
				<SearchableDropdown
					items={types}
					inputData={typeSearchInput}
					placeHolder="Type"
					handleDropdownItemSearch={handleDropdownItemSearch}
					handleDropdownItemSelection={handleDropdownItemSelection}
				/>
				<SearchableDropdown
					items={categories}
					inputData={categorySearchInput}
					placeHolder="Category"
					handleDropdownItemSearch={handleDropdownItemSearch}
					handleDropdownItemSelection={handleDropdownItemSelection}
				/>
				<button className={classes.NewAccountSectionButtonSave} onClick={handleAccountCreate}>
					Add Account
				</button>
			</div>
			<div className={classes.TableHeader}>
				<div className={classes.TableHeaderSelectColumn}>
					<input className={classes.TableHeaderCheckboxInput} type="checkbox"/>
				</div>
				<div className={classes.TableHeaderEnterpriseColumn}>Enterprise</div>
				<div className={classes.TableHeaderCategoryColumn}>Type</div>
				<div className={classes.TableHeaderCategoryColumn}>Category</div>
				<div className={classes.TableHeaderTotalColumn}>Total</div>
				<div className={classes.TableHeaderButtonsColumn}/>
			</div>
			<div className={classes.TableRows}>
				{sortedAccounts.map(account => (
					<AccountCard
						key={account.id}
						account={account}
						transactions={transactions}
						types={types}
						categories={categories}
						handleAccountDelete={handleAccountDelete}
						handleEnterpriseInputUpdate={handleEnterpriseInputUpdate}
						handleEnterpriseInputSelection={handleEnterpriseInputSelection}
						enterpriseInputSelection={enterpriseInputSelection}
						handleAccountCardTypeDropdownShowDropdown={handleAccountCardTypeDropdownShowDropdown}
						handleAccountCardCategoryDropdownShowDropdown={handleAccountCardCategoryDropdownShowDropdown}
						accountCardTypeDropdownShowDropdown={accountCardTypeDropdownShowDropdown}
						accountCardCategoryDropdownShowDropdown={accountCardCategoryDropdownShowDropdown}
						handleAccountUpdate={handleAccountUpdate}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

accountPanel.propTypes = {
	accounts: PropTypes.array,
	account: PropTypes.object,
	categories: PropTypes.array,
	transactions: PropTypes.array,
	categorySearchInput: PropTypes.string,
	enterpriseInput: PropTypes.string,
	handleEnterpriseInput: PropTypes.func
};

export default accountPanel;
