import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import PropTypes from "prop-types";
import classes from "./AccountPanel.module.scss";
import AccountCard from "./AccountCard/AccountCard";
import AccountCategoryDropdown from "./AccountCategoryDropdown/AccountCategoryDropdown";
import AccountEnterpriseInput from "./AccountEnterpriseInput/AccountEnterpriseInput";
import AccountTypeDropdown from "./AccountTypeDropdown/AccountTypeDropdown";

const accountPanel = () => {
	const accounts = useSelector(state => state.account.accounts);
	const transactions = useSelector(state => state.transaction.transactions);
	const categories = useSelector(state => state.category.categories);
	const dispatch = useDispatch()
	const [categorySearchInput, setCategorySearchInput] = useState("");
	const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
	const [typeSearchInput, setTypeSearchInput] = useState("");
	const [showTypeDropdown, setShowTypeDropdown] = useState(false);

	useEffect(() => {
		dispatch(actions.fetchAccounts())
		dispatch(actions.fetchCategories())
	}, [])

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
		setCategorySearchInput("");
	};

	const handleCategorySearchSelection = category => {
		setCategorySearchInput(category.title);
		setShowCategoryDropdown(false);
	};

	const handleShowTypeDropdown = () => {
		setShowTypeDropdown(!showTypeDropdown)
	};

	const handleTypeSearch = event => {
		const typeSearchInput = event.target.value;
		setShowTypeDropdown(true);
		setTypeSearchInput(typeSearchInput);
	};

	const handleClearTypeSearch = () => {
		setShowTypeDropdown(false)
		setTypeSearchInput("");
	};

	const handleTypeSearchSelection = type => {
		setTypeSearchInput(type);
		setShowTypeDropdown(false);
	};

	const sortedAccounts = accounts.sort((a, b) => {
		const textA = a.enterprise.toLowerCase();
		const textB = b.enterprise.toLowerCase();
		return textA < textB ? -1 : textA > textB ? 1 : 0;
	});

	return (
		<div className={classes.Container}>
			<div className={classes.NewAccountSection}>
				<AccountEnterpriseInput />
				<AccountTypeDropdown
					accounts={sortedAccounts}
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
				<button className={classes.NewAccountSectionButtonSave}>
					Add Account
				</button>
			</div>
			<div className={classes.TableHeader}>
				<div className={classes.TableHeaderSelectColumn}>
					<input className={classes.TableHeaderCheckboxInput} type="checkbox" />
				</div>
				<div className={classes.TableHeaderEnterpriseColumn}>Enterprise</div>
				<div className={classes.TableHeaderCategoryColumn}>Type</div>
				<div className={classes.TableHeaderCategoryColumn}>Category</div>
				<div className={classes.TableHeaderTotalColumn}>Total</div>
			</div>
			<div className={classes.TableRows}>
				{sortedAccounts.map(account => (
					<AccountCard key={account.id} account={account} transactions={transactions} />
				))}
			</div>
		</div>
	);
};

accountPanel.propTypes = {
	accounts: PropTypes.array,
	account: PropTypes.object,
	categories: PropTypes.array,
	categorySearchInput: PropTypes.string,
	showCategoryDropdown: PropTypes.bool,
	handleCategorySearch: PropTypes.func,
	handleClearCategorySearch: PropTypes.func,
	handleShowCategoryDropdown: PropTypes.func,
	handleCategorySearchSelection: PropTypes.func
};

export default accountPanel;
