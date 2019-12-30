import React from "react";
import classes from "./DashboardPanel.module.scss";
import { Bar, Doughnut } from "react-chartjs-2";

const dashboard = () => {
	const monthlyIncomesExpensesData = {
		labels: [
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
		],
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
				backgroundColor: "#29a529"
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
				backgroundColor: "#c3323d"
			}
		]
	};
	const totalIncomesExpensesData = {
		labels: ["Incomes", "Expenses"],
		datasets: [
			{
				data: [13000, 11000],
				backgroundColor: ["#29a529", "#c3323d"]
			}
		]
	};
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
				backgroundColor: "#c3323d"
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
		<div className={classes.Container}>
			<div className={classes.TopChart}>
				<div className={classes.IncomesExpensesChart}>
					<Bar
						data={monthlyIncomesExpensesData}
						options={options}
						width={1400}
						height={400}
					/>
				</div>
			</div>
			<div className={classes.BottomCharts}>
				<div className={classes.TotalIncomesExpensesChart}>
					<Doughnut
						data={totalIncomesExpensesData}
						options={doughnutOptions}
						width={700}
						height={400}
					/>
				</div>
				<div>
					<Bar
						data={categoryExpensesData}
						options={options}
						width={700}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
};

export default dashboard;
