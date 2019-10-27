import React from "react";
import classes from "./TransactionTable.module.scss";
import PropTypes from "prop-types";
import moment from "moment";
import TransactionCard from "./TransactionCard/TransactionCard";

const transactionTable = props => {
	const transactions = props.transactions;
	const activeMonth = props.activeMonth;
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
					onClick={props.handleMonthSelectionPrevious}
				>
					Previous Month
				</button>
				<h2 className={classes.MonthPickerTitle}>
					{moment(activeMonth).format("MMM YYYY")}
				</h2>
				<button
					className={classes.MonthPickerNext}
					onClick={props.handleMonthSelectionNext}
				>
					Next Month
				</button>
			</div>
			<div className={classes.TableHeader}>
				<div className={classes.TableHeaderSelectColumn}>
					<input className={classes.TableHeaderCheckboxInput} type="checkbox" />
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
					<TransactionCard key={transaction.id} transaction={transaction} />
				))}
			</div>
			<div className={classes.NewTransactionSection}>
				<button
					onClick={props.handleNewTransactionBottomRow}
					className={classes.NewTransactionButton}
				>
					Add Transactions
				</button>
			</div>
		</div>
	);
};

transactionTable.propTypes = {
	transactions: PropTypes.array,
	transaction: PropTypes.object,
	activeMonth: PropTypes.string,
	filteredTransactions: PropTypes.array,
	totalFilteredTransactions: PropTypes.array,
	handleMonthSelectionPrevious: PropTypes.func,
	handleMonthSelectionNext: PropTypes.func,
	handleNewTransactionBottomRow: PropTypes.func
};

export default transactionTable;
