import React from "react";
import classes from "./MonthlyTransactionChart.module.scss";
import { Bar } from "react-chartjs-2";
import moment from "moment";

const monthlyTransactionChart = props => {
	const transactions = props.transactions;
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	let filteredTransactions = [];
	let totalFilteredTransactions = [];
	if (transactions) {
		filteredTransactions = months.map(month => transactions.filter(
			transaction =>
				moment(transaction.date, "YYYY-MM-DD").format("YYYY-MM") === moment().month(month).format("YYYY-MM")
		));
		if (filteredTransactions.length > 0) {
			totalFilteredTransactions = filteredTransactions
				.map(transaction => transaction.total)
				.reduce((accumulator, currentValue) => accumulator + currentValue);
		}
	}
	const monthlyTransactionsData = {
		labels: months,
		datasets: [
			{
				label: "Incomes",
				data: [
					1000,
					1200,
					1500,
					1500,
					1000,
					2000,
					1300,
					1200,
					1100,
					1033,
					1200,
					1300
				],
				backgroundColor: "#28b045"
			},
			{
				label: "Expenses",
				data: [
					1000,
					1200,
					700,
					700,
					1000,
					1200,
					1300,
					1200,
					1100,
					1000,
					1400,
					1500
				],
				backgroundColor: "#ff3b33"
			}
		]
	};

	return (
		<div className={classes.TopChart}>
			<div className={classes.IncomesExpensesChart}>
				<Bar
					data={monthlyTransactionsData}
					options={props.options}
					width={1000}
					height={400}
				/>
			</div>
		</div>
	);
};

export default monthlyTransactionChart;