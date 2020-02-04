import React from "react";
import classes from './AccountCard.module.scss'
import AccountCardTypeDropdown from "./AccountCardTypeDropdown/AccountCardTypeDropdown";
import AccountCardCategoryDropdown from "./AccountCardCategoryDropdown/AccountCardCategoryDropdown";

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
			<div className={classes.TableEnterpriseRow}>
				{props.enterpriseInputSelection.id === account.id ? (
					<input
						id={account.id}
						defaultValue={account.enterprise}
						placeholder="Enterprise"
						autoFocus={true}
						onChange={props.handleEnterpriseInputUpdate}
						onBlur={props.handleEnterpriseInputSelection}
					>
					</input>
				) : <div onClick={() => props.handleEnterpriseInputSelection(account)}>
					{account.enterprise}
				</div>
				}
			</div>
			<div className={classes.TableTypeRow}>
				<AccountCardTypeDropdown
					account={account}
					types={props.types}
					handleAccountCardTypeDropdownShowDropdown={props.handleAccountCardTypeDropdownShowDropdown}
					accountCardTypeDropdownShowDropdown={props.accountCardTypeDropdownShowDropdown}
					handleAccountUpdate={props.handleAccountUpdate}
				/>
			</div>
			<div className={classes.TableCategoryRow}>
				<AccountCardCategoryDropdown
					account={account}
					categories={props.categories}
					handleAccountCardCategoryDropdownShowDropdown={props.handleAccountCardCategoryDropdownShowDropdown}
					accountCardCategoryDropdownShowDropdown={props.accountCardCategoryDropdownShowDropdown}
					handleAccountUpdate={props.handleAccountUpdate}
				/>
			</div>
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
