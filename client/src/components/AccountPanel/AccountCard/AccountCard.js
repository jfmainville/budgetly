import React from "react";
import classes from "./AccountCard.module.scss";

const accountCard = props => {
	const account = props.account;
	const transactions = props.transactions;
	let filteredTransactions = [];
	let totalFilteredTransactions = [];
	if (transactions) {
		filteredTransactions = transactions.filter(
			transaction => transaction.enterprise === account.enterprise
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
		<div className={classes.TableRow}>
			<div className={classes.TableSelectRow}>
				<input className={classes.TableCheckboxInput} type="checkbox"/>
			</div>
			<div className={classes.TableEnterpriseRow}>{account.enterprise}</div>
			<div className={classes.TableTypeRow}>{account.type}</div>
			<div className={classes.TableCategoryRow}>{account.category}</div>
			<div className={classes.TableTotalRow}>{totalFilteredTransactions}</div>
			<div className={classes.TableButtonsRow}>
				<button
					id={account}
					onClick={() => props.handleAccountDelete(account)}
				>X
				</button>
			</div>
		</div>
	);
};

export default accountCard;
