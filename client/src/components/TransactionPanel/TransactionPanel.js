import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import moment from "moment";
import classes from "./TransactionPanel.module.scss";
import PropTypes from "prop-types";
import TransactionCard from "./TransactionCard/TransactionCard";
import TransactionDatePicker from "./TransactionDatePicker/TransactionDatePicker";
import TransactionDateInput from "./TransactionDateInput/TransactionDateInput";
import TransactionEnterpriseInput from "./TransactionEnterpriseInput/TransactionEnterpriseInput";
import TransactionAmountInput from "./TransactionAmountInput/TransactionAmountInput";

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

	const handleTransactionDateInput = event => {
		const date_input = event.target.value;
		setTransactionDate(date_input);
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

	const handleEnterpriseSearch = event => {
		const enterpriseSearchInput = event.target.value;
		setShowEnterpriseDropdown(true);
		setEnterpriseSearchInput(enterpriseSearchInput);
	};

	const handleClearEnterpriseSearch = () => {
		setShowEnterpriseDropdown(false);
		setEnterpriseSearchInput("");
	};

	const handleEnterpriseSearchSelection = account => {
		const account_enterprise = account.enterprise;
		setEnterpriseSearchInput(account_enterprise);
		setShowEnterpriseDropdown(false);
	};

	const handleEnterpriseAmountInput = event => {
		const transaction_amount = event.target.value;
		setEnterpriseAmountInput(transaction_amount);
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
					Previous Month
				</button>
				<h2 className={classes.MonthPickerTitle}>
					{moment(activeMonth).format("MMM YYYY")}
				</h2>
				<button
					className={classes.MonthPickerNext}
					onClick={handleMonthSelectionNext}
				>
					Next Month
				</button>
			</div>
			<div className={classes.NewTransactionSection}>
				<TransactionDatePicker
					handleShowTransactionDatePicker={handleShowTransactionDatePicker}
					showTransactionDatePicker={showTransactionDatePicker}
					handleSelectedDate={handleSelectedDate}
				/>
				<TransactionDateInput
					handleTransactionDateInput={handleTransactionDateInput}
					transactionDate={transactionDate}
				/>
				<TransactionEnterpriseInput
					accounts={sortedAccounts}
					showEnterpriseDropdown={showEnterpriseDropdown}
					enterpriseSearchInput={enterpriseSearchInput}
					handleShowEnterpriseDropdown={handleShowEnterpriseDropdown}
					handleEnterpriseSearch={handleEnterpriseSearch}
					handleClearEnterpriseSearch={handleClearEnterpriseSearch}
					handleEnterpriseSearchSelection={handleEnterpriseSearchSelection}
				/>
				<TransactionAmountInput
					enterpriseAmountInput={enterpriseAmountInput}
					handleEnterpriseAmountInput={handleEnterpriseAmountInput}
				/>
				<button className={classes.NewTransactionSectionButtonSave} onClick={handleTransactionCreate}>
					Add Transaction
				</button>
			</div>
			<div className={classes.TableHeader}>
				<div className={classes.TableHeaderEnterpriseColumn}>Date</div>
				<div className={classes.TableHeaderEnterpriseColumn}>Enterprise</div>
				<div className={classes.TableHeaderCategoryColumn}>Type</div>
				<div className={classes.TableHeaderCategoryColumn}>Category</div>
				<div className={classes.TableHeaderTotalColumn}>Total</div>
			</div>
			<div className={classes.TotalColumnTotal}>
				<h2 className={classes.TotalColumnTotalText}>
					{totalFilteredTransactions}
				</h2>
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
						handleEnterpriseSearch={handleEnterpriseSearch}
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
