import React, { useEffect, useState } from "react";
import classes from "./DashboardPanel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import MonthlyTransactionChart from "./MonthlyTransactionChart/MonthlyTransactionChart";
import * as actions from "../../store/actions";
import TotalTransactionChart from "./TotalTransactionChart/TotalTransactionChart";
import moment from "moment";

const DashboardPanel = () => {
	const accounts = useSelector(state => state.account.accounts);
	const transactions = useSelector(state => state.transaction.transactions);
	const [activeYear, setActiveYear] = useState(moment());
	const categoryExpensesData = {
		labels: [
			"Automobile",
			"Grocery",
			"Housing",
			"Entertainment",
			"Activity",
			"Sport"
		],
		datasets: [
			{
				label: ["Expenses"],
				data: [1000, 1200, 1000, 1200, 1200, 1000],
				backgroundColor: "#ff3b33"
			}
		]
	};
	const options = {
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			yAxes: [
				{
					display: true,
					ticks: {
						beginAtZero: true
					}
				}
			],
			xAxes: [
				{
					display: true,
					gridLines: {
						display: false
					}
				}
			]
		}
	};
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.fetchAccounts());
		dispatch(actions.fetchTransactions());
	}, []);

	return (
		<div className={classes.Container}>
			<div className={classes.TopChart}>
				<MonthlyTransactionChart
					transactions={transactions}
					options={options}
				/>
			</div>
			<div className={classes.BottomCharts}>
				<TotalTransactionChart
					transactions={transactions}
					activeYear={activeYear}
				/>
			</div>
		</div>
	);
};

export default DashboardPanel;
