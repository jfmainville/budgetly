import React from "react";
import classes from "./TotalTransactionChart.module.scss";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";

const totalTransactionChart = props => {
	const transactions = props.transactions;
	const activeYear = props.activeYear;
	let chartData = [];
	if (transactions) {
		const filteredIncomes = transactions.filter(
			transaction =>
				transaction.type === "Income" && moment(transaction.date).format("YYYY") === moment(activeYear).format("YYYY")
		);
		if (filteredIncomes.length > 0) {
			const totalFilteredIncomes = Math.round(filteredIncomes
				.map(transaction => transaction.total)
				.reduce((accumulator, currentValue) => accumulator + currentValue)).toFixed(0);
			chartData.push(totalFilteredIncomes);
		}
		const filteredExpenses = transactions.filter(
			transaction =>
				transaction.type === "Expense" && moment(transaction.date).format("YYYY") === moment(activeYear).format("YYYY")
		);
		if (filteredExpenses.length > 0) {
			const totalFilteredExpenses = Math.round(filteredExpenses
				.map(transaction => transaction.total)
				.reduce((accumulator, currentValue) => accumulator + currentValue)).toFixed(0);
			chartData.push(totalFilteredExpenses);
		}
	}
	const totalIncomesExpensesData = {
		labels: ["Incomes", "Expenses"],
		datasets: [
			{
				data: chartData,
				backgroundColor: ["#28b045", "#ff3b33"]
			}
		]
	};
	const doughnutOptions = {
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			xAxes: [
				{
					display: false,
					gridLines: {
						display: false
					}
				}
			]
		}
	};

	return (
		<div className={classes.IncomesExpensesChart}>
			<Doughnut
				data={totalIncomesExpensesData}
				options={doughnutOptions}
				width={700}
				height={400}
			/>
		</div>
	);
};

export default totalTransactionChart;