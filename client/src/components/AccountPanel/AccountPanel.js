import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import PropTypes from 'prop-types';
import classes from './AccountPanel.module.scss';
import AccountCard from './AccountCard/AccountCard';
import AccountCategoryDropdown from './AccountCategoryDropdown/AccountCategoryDropdown';
import AccountEnterpriseInput from './AccountEnterpriseInput/AccountEnterpriseInput';
import AccountTypeDropdown from './AccountTypeDropdown/AccountTypeDropdown';

const accountPanel = () => {
	const accounts = useSelector(state => state.account.accounts);
	const transactions = useSelector(state => state.transaction.transactions);
	const categories = useSelector(state => state.category.categories);
	const dispatch = useDispatch();
	const types = [
		'Expense',
		'Income'
	];
	const [enterpriseInput, setEnterpriseInput] = useState('');
	const [enterpriseInputSelection, setEnterpriseInputSelection] = useState('');
	const [enterpriseInputUpdate, setEnterpriseInputUpdate] = useState('');
	const [categorySearchInput, setCategorySearchInput] = useState('');
	const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
	const [typeSearchInput, setTypeSearchInput] = useState('');
	const [showTypeDropdown, setShowTypeDropdown] = useState(false);
	const [accountCardTypeDropdownShowDropdown, setAccountCardTypeDropdownShowDropdown] = useState('');

	useEffect(() => {
		dispatch(actions.fetchAccounts());
		dispatch(actions.fetchCategories());
	}, []);

	const handleEnterpriseInput = event => {
		const enterpriseInput = event.target.value;
		setEnterpriseInput(enterpriseInput);
	};

	const handleEnterpriseInputSelection = (account) => {
		if (!enterpriseInputSelection) {
			setEnterpriseInputSelection(account);
		} else {
			if (enterpriseInputUpdate) {
				handleAccountUpdate();
			}
			setEnterpriseInputSelection('');
		}
	};

	const handleEnterpriseInputUpdate = event => {
		setEnterpriseInputUpdate(event.target.value);
	};

	const handleShowCategoryDropdown = () => {
		setShowCategoryDropdown(!showCategoryDropdown);
	};

	const handleCategorySearch = event => {
		const categorySearchInput = event.target.value;
		setShowCategoryDropdown(true);
		setCategorySearchInput(categorySearchInput);
	};

	const handleClearCategorySearch = () => {
		setShowCategoryDropdown(false);
		setCategorySearchInput('');
	};

	const handleCategorySearchSelection = category => {
		setCategorySearchInput(category.title);
		setShowCategoryDropdown(false);
	};

	const handleShowTypeDropdown = () => {
		setShowTypeDropdown(!showTypeDropdown);
	};

	const handleTypeSearch = event => {
		const typeSearchInput = event.target.value;
		setShowTypeDropdown(true);
		setTypeSearchInput(typeSearchInput);
	};

	const handleClearTypeSearch = () => {
		setShowTypeDropdown(false);
		setTypeSearchInput('');
	};

	const handleTypeSearchSelection = type => {
		setTypeSearchInput(type);
		setShowTypeDropdown(false);
	};

	const handleAccountCardTypeDropdownShowDropdown = (account) => {
		setAccountCardTypeDropdownShowDropdown(account);
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
		setEnterpriseInput('');
		setTypeSearchInput('');
		setCategorySearchInput('');
	};

	const handleAccountUpdate = (account, type) => {
		let data = {};
		if (enterpriseInputSelection) {
			data.id = enterpriseInputSelection.id;
			data.enterprise = enterpriseInputUpdate;
			data.type = enterpriseInputSelection.type;
			data.category = enterpriseInputSelection.category;
			dispatch(actions.updateAccount(data));
			setEnterpriseInputUpdate('');
		}
		if (account && type) {
			data.id = account.id;
			data.enterprise = account.enterprise;
			data.type = type;
			data.category = account.category;
			dispatch(actions.updateAccount(data));
			setAccountCardTypeDropdownShowDropdown('');
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
		<div className={classes.Container}>
			<div className={classes.NewAccountSection}>
				<AccountEnterpriseInput
					enterpriseInput={enterpriseInput}
					handleEnterpriseInput={handleEnterpriseInput}
				/>
				<AccountTypeDropdown
					accounts={sortedAccounts}
					types={types}
					typeSearchInput={typeSearchInput}
					showTypeDropdown={showTypeDropdown}
					handleShowTypeDropdown={handleShowTypeDropdown}
					handleTypeSearch={handleTypeSearch}
					handleClearTypeSearch={handleClearTypeSearch}
					handleTypeSearchSelection={handleTypeSearchSelection}
				/>
				<AccountCategoryDropdown
					categories={categories}
					categorySearchInput={categorySearchInput}
					showCategoryDropdown={showCategoryDropdown}
					handleCategorySearch={handleCategorySearch}
					handleClearCategorySearch={handleClearCategorySearch}
					handleShowCategoryDropdown={handleShowCategoryDropdown}
					handleCategorySearchSelection={handleCategorySearchSelection}
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
						handleAccountDelete={handleAccountDelete}
						handleEnterpriseInputUpdate={handleEnterpriseInputUpdate}
						handleEnterpriseInputSelection={handleEnterpriseInputSelection}
						enterpriseInputSelection={enterpriseInputSelection}
						handleAccountCardTypeDropdownShowDropdown={handleAccountCardTypeDropdownShowDropdown}
						accountCardTypeDropdownShowDropdown={accountCardTypeDropdownShowDropdown}
						handleAccountUpdate={handleAccountUpdate}
					/>
				))}
			</div>
		</div>
	);
};

accountPanel.propTypes = {
	accounts: PropTypes.array,
	account: PropTypes.object,
	categories: PropTypes.array,
	transactions: PropTypes.array,
	categorySearchInput: PropTypes.string,
	enterpriseInput: PropTypes.string,
	showCategoryDropdown: PropTypes.bool,
	handleCategorySearch: PropTypes.func,
	handleClearCategorySearch: PropTypes.func,
	handleShowCategoryDropdown: PropTypes.func,
	handleCategorySearchSelection: PropTypes.func,
	handleEnterpriseInput: PropTypes.func
};

export default accountPanel;
