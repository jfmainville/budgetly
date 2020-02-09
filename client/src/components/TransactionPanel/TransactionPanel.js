import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import moment from "moment";
import classes from "./TransactionPanel.module.scss";
import PropTypes from "prop-types";
import TransactionCard from "./TransactionCard/TransactionCard";
import TransactionDatePicker from "./TransactionDatePicker/TransactionDatePicker";
import TransactionDateInput from "./TransactionDateInput/TransactionDateInput";

const transactionPanel = () => {
	const transactions = useSelector(state => state.transaction.transactions);
	const [activeMonth, setActiveMonth] = useState(moment().format("YYYY-MM"));
	const [showTransactionDatePicker, setShowTransactionDatePicker] = useState(false);
	const [transactionDate, setTransactionDate] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchTransactions());
	});

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

	const handleTransactionDateInput = event => {
		const date_input = event.target.value;
		setTransactionDate(date_input);
	};

	const handleSelectedDate = date => {
		const date_full = date.date_full;
		setTransactionDate(date_full);
		setShowTransactionDatePicker(false);
	};

	let filteredTransactions = [];
	let totalFilteredTransactions = [];
	if (transactions) {
		filteredTransactions = transactions.filter(
			transaction =>
				moment(transaction.date, "YYYY-MM-DD").format("YYYY-MM") === activeMonth
		);
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
			</div>
			<div className={classes.TableHeader}>
				<div className={classes.TableHeaderSelectColumn}>
					<input className={classes.TableHeaderCheckboxInput} type="checkbox"/>
				</div>
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
					<TransactionCard key={transaction.id} transaction={transaction}/>
				))}
			</div>
		</div>
	);
};

transactionPanel.propTypes = {
	transactions: PropTypes.array,
	transaction: PropTypes.object,
	showTransactionDatePicker: PropTypes.bool,
	transactionDate: PropTypes.string,
	activeMonth: PropTypes.string,
	filteredTransactions: PropTypes.array,
	totalFilteredTransactions: PropTypes.array,
	handleMonthSelectionPrevious: PropTypes.func,
	handleMonthSelectionNext: PropTypes.func,
	handleNewTransactionBottomRow: PropTypes.func,
	handleSelectedDate: PropTypes.func
};

export default transactionPanel;
