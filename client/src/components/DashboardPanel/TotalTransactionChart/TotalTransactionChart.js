import React from "react";
import classes from "./TotalTransactionChart.module.scss";
import { Doughnut } from "react-chartjs-2";

const totalTransactionChart = props => {
	const transactions = props.transactions;
	let chartData = [];
	if (transactions) {
		const filteredIncomes = transactions.filter(
			transaction =>
				transaction.type === "Income"
		);
		if (filteredIncomes.length > 0) {
			const totalFilteredIncomes = Math.round(filteredIncomes
				.map(transaction => transaction.total)
				.reduce((accumulator, currentValue) => accumulator + currentValue)).toFixed(0);
			chartData.push(totalFilteredIncomes);
		}
		const filteredExpenses = transactions.filter(
			transaction =>
				transaction.type === "Expense"
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
				backgroundColor: ["#29a529", "#c3323d"]
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