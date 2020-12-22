import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import moment from "moment";
import classes from "./TransactionPanel.module.scss";
import PropTypes from "prop-types";
import TransactionCard from "./TransactionCard/TransactionCard";
import TransactionDatePicker from "./TransactionDatePicker/TransactionDatePicker";
import InputField from "../UI/InputField/InputField";
import SearchableDropdown from "../UI/SearchableDropdown/SearchableDropdown";

const transactionPanel = () => {
	const accounts = useSelector(state => state.account.accounts);
	const transactions = useSelector(state => state.transaction.transactions);
	const [activeMonth, setActiveMonth] = useState(moment().format("YYYY-MM"));
	const [showTransactionDatePicker, setShowTransactionDatePicker] = useState(false);
	const [showTransactionUpdateDatePicker, setShowTransactionUpdateDatePicker] = useState(null);
	const [showEnterpriseDropdown, setShowEnterpriseDropdown] = useState(false);
	const [enterpriseSearchInput, setEnterpriseSearchInput] = useState("");
	const [enterpriseAmountInput, setEnterpriseAmountInput] = useState("");
	const [transactionCardEnterpriseDropdownShowDropdown, setTransactionCardEnterpriseDropdownShowDropdown] = useState("");
	const [transactionDate, setTransactionDate] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchAccounts());
		dispatch(actions.fetchTransactions());
	}, []);

	const handleMonthSelectionPrevious = () => {
		let selectedMonth = moment(activeMonth, "YYYY-MM")
			.add(-1, "month")
			.format("YYYY-MM");
		setActiveMonth(selectedMonth);
	};

	const handleMonthSelectionNext = () => {
		let selectedMonth = moment(activeMonth, "YYYY-MM")
			.add(1, "month")
			.format("YYYY-MM");
		setActiveMonth(selectedMonth);
	};

	const handleShowTransactionDatePicker = () => {
		setShowTransactionDatePicker(!showTransactionDatePicker);
	};

	const handleShowTransactionUpdateDatePicker = (transaction) => {
		const transactionId = transaction.id;
		if (transactionId) {
			setShowTransactionUpdateDatePicker(transactionId);
		} else {
			setShowTransactionUpdateDatePicker(null);
		}
	};

	const handleTransactionDateInput = date => {
		setTransactionDate(date);
	};

	const handleSelectedDate = date => {
		const date_full = date.date_full;
		if (showTransactionDatePicker && date_full) {
			setTransactionDate(date_full);
			setShowTransactionDatePicker(false);
		}
		if (showTransactionUpdateDatePicker && date_full) {
			handleTransactionUpdate(date_full);
			setShowTransactionUpdateDatePicker(null);
		}
	};

	const handleShowEnterpriseDropdown = () => {
		setShowEnterpriseDropdown(!showEnterpriseDropdown);
	};

	const handleDropdownItemSearch = (itemType, data) => {
		if (itemType === "Enterprise") {
			setEnterpriseSearchInput(data);
		}
	};

	const handleDropdownItemSelection = (itemType, item) => {
		if (itemType === "Enterprise") {
			setEnterpriseSearchInput(item[itemType.toLowerCase()]);
		}
	};

	const handleEnterpriseSearchSelection = account => {
		const account_enterprise = account.enterprise;
		setEnterpriseSearchInput(account_enterprise);
		setShowEnterpriseDropdown(false);
	};

	const handleEnterpriseAmountInput = amount => {
		setEnterpriseAmountInput(amount);
	};

	const handleTransactionCardEnterpriseDropdownShowDropdown = (account) => {
		setTransactionCardEnterpriseDropdownShowDropdown(account);
	};

	const handleTransactionCreate = () => {
		let data = {};
		if (transactions) {
			if (transactionDate && enterpriseSearchInput && enterpriseAmountInput) {
				if (accounts) {
					const accountDetails = accounts.filter(account => account.enterprise === enterpriseSearchInput)[0];
					data.id = Math.max.apply(Math, transactions.map(transaction => transaction.id)) + 1;
					data.date = transactionDate;
					data.enterprise = enterpriseSearchInput;
					data.type = accountDetails.type;
					data.category = accountDetails.category;
					data.total = parseInt(enterpriseAmountInput);
					dispatch(actions.createTransaction(data));
				}
			}
		} else {
			data.id = 1;
			data.date = transactionDate;
			data.enterprise = enterpriseSearchInput;
			data.amount = enterpriseAmountInput;
			dispatch(actions.createTransaction(data));
		}

		setTransactionDate("");
		setEnterpriseSearchInput("");
		setEnterpriseAmountInput("");
	};

	const handleTransactionUpdate = (date, account) => {
		let data = {};
		if (transactions) {
			if (date && showTransactionUpdateDatePicker) {
				const transactionDetails = transactions.filter(transaction => transaction.id === showTransactionUpdateDatePicker)[0];
				data.id = showTransactionUpdateDatePicker;
				data.date = date;
				data.enterprise = transactionDetails.enterprise;
				data.type = transactionDetails.type;
				data.category = transactionDetails.category;
				data.total = transactionDetails.total;
				dispatch(actions.updateTransaction(data));
			}
			if (account && transactionCardEnterpriseDropdownShowDropdown) {
				const transactionDetails = transactions.filter(transaction => transaction.id === transactionCardEnterpriseDropdownShowDropdown.id)[0];
				data.id = transactionCardEnterpriseDropdownShowDropdown.id;
				data.date = transactionDetails.date;
				data.enterprise = account.enterprise;
				data.type = account.type;
				data.category = account.category;
				data.total = transactionDetails.total;
				dispatch(actions.updateTransaction(data));
			}
		}

		setShowTransactionUpdateDatePicker(null);
		setTransactionCardEnterpriseDropdownShowDropdown("");
	};

	const handleTransactionDelete = (transaction) => {
		let data = {};
		if (transaction.id) {
			data = transaction.id;
			dispatch(actions.deleteTransaction(data));
		}
	};

	let filteredTransactions = [];
	let totalFilteredTransactions = [];
	if (transactions) {
		filteredTransactions = transactions.filter(
			transaction =>
				moment(transaction.date, "YYYY-MM-DD").format("YYYY-MM") === activeMonth
		).sort((a, b) => {return new Date(b.date) - new Date(a.date);});
		if (filteredTransactions.length > 0) {
			totalFilteredTransactions = filteredTransactions
				.map(transaction => transaction.total)
				.reduce((accumulator, currentValue) => accumulator + currentValue);
			totalFilteredTransactions = new Intl.NumberFormat("en-CA", {
				style: "currency",
				currency: "CAD"
			}).format(totalFilteredTransactions);
		}
	}

	const sortedAccounts = accounts.sort((a, b) => {
		const textA = a.enterprise.toLowerCase();
		const textB = b.enterprise.toLowerCase();
		return textA < textB ? -1 : textA > textB ? 1 : 0;
	});

	return (
		<div className={classes.Container}>
			<div className={classes.MonthPicker}>
				<button
					className={classes.MonthPickerPrevious}
					onClick={handleMonthSelectionPrevious}
				>
					<svg className={classes.Icon}>
						<use xlinkHref="/assets/sprite.svg#icon-chevron-left"/>
					</svg>
				</button>
				<p className={classes.MonthPickerTitle}>
					{moment(activeMonth).format("MMMM YYYY")}
				</p>
				<button
					className={classes.MonthPickerNext}
					onClick={handleMonthSelectionNext}
				>
					<svg className={classes.Icon}>
						<use xlinkHref="/assets/sprite.svg#icon-chevron-right"/>
					</svg>
				</button>
			</div>
			<div className={classes.NewTransactionSection}>
				<TransactionDatePicker
					handleShowTransactionDatePicker={handleShowTransactionDatePicker}
					showTransactionDatePicker={showTransactionDatePicker}
					handleSelectedDate={handleSelectedDate}
				/>
				<InputField
					inputData={transactionDate}
					placeHolder="Date"
					handleInputSelection={handleTransactionDateInput}
				/>
				<SearchableDropdown
					items={sortedAccounts}
					inputData={enterpriseSearchInput}
					placeHolder="Enterprise"
					handleDropdownItemSearch={handleDropdownItemSearch}
					handleDropdownItemSelection={handleDropdownItemSelection}
				/>
				<InputField
					inputData={enterpriseAmountInput}
					placeHolder="Amount"
					handleInputSelection={handleEnterpriseAmountInput}
				/>
				<button className={classes.NewTransactionSectionButtonSave} onClick={handleTransactionCreate}>
					Add Transaction
				</button>
			</div>
			<div className={classes.TableHeader}>
				<div className={classes.TableHeaderDateColumn}>Date</div>
				<div className={classes.TableHeaderEnterpriseColumn}>Enterprise</div>
				<div className={classes.TableHeaderTypeColumn}>Type</div>
				<div className={classes.TableHeaderCategoryColumn}>Category</div>
				<div className={classes.TableHeaderTotalColumn}>Amount</div>
				<div className={classes.TableHeaderMenuColumn}/>
			</div>
			<div className={classes.TableRows}>
				{filteredTransactions.map(transaction => (
					<TransactionCard
						key={transaction.id}
						transaction={transaction}
						accounts={accounts}
						handleShowTransactionUpdateDatePicker={handleShowTransactionUpdateDatePicker}
						showTransactionUpdateDatePicker={showTransactionUpdateDatePicker}
						handleTransactionCardEnterpriseDropdownShowDropdown={handleTransactionCardEnterpriseDropdownShowDropdown}
						handleEnterpriseSearch={handleDropdownItemSearch}
						handleTransactionUpdate={handleTransactionUpdate}
						handleTransactionDelete={handleTransactionDelete}
						showEnterpriseDropdown={showEnterpriseDropdown}
						handleShowEnterpriseDropdown={handleShowEnterpriseDropdown}
						transactionCardEnterpriseDropdownShowDropdown={transactionCardEnterpriseDropdownShowDropdown}
						handleEnterpriseSearchSelection={handleEnterpriseSearchSelection}
						handleSelectedDate={handleSelectedDate}
					/>
				))}
			</div>
		</div>
	);
};

transactionPanel.propTypes = {
	transactions: PropTypes.array,
	transaction: PropTypes.object,
	showTransactionDatePicker: PropTypes.bool,
	showTransactionUpdateDatePicker: PropTypes.string,
	showEnterpriseDropdown: PropTypes.bool,
	enterpriseSearchInput: PropTypes.string,
	enterpriseAmountInput: PropTypes.string,
	transactionDate: PropTypes.string,
	activeMonth: PropTypes.string,
	filteredTransactions: PropTypes.array,
	totalFilteredTransactions: PropTypes.array,
	handleMonthSelectionPrevious: PropTypes.func,
	handleMonthSelectionNext: PropTypes.func,
	handleShowTransactionDatePicker: PropTypes.func,
	handleShowTransactionUpdateDatePicker: PropTypes.func,
	handleNewTransactionBottomRow: PropTypes.func,
	handleSelectedDate: PropTypes.func,
	handleShowEnterpriseDropdown: PropTypes.func,
	handleEnterpriseSearch: PropTypes.func,
	handleClearEnterpriseSearch: PropTypes.func,
	handleEnterpriseSearchSelection: PropTypes.func,
	handleEnterpriseAmountInput: PropTypes.func,
	handleTransactionCreate: PropTypes.func,
	handleTransactionUpdate: PropTypes.func
};

export default transactionPanel;
