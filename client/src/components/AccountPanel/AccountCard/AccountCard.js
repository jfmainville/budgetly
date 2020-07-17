import React from "react";
import classes from "./AccountCard.module.scss";
import SelectableDropdown from "../../UI/SelectableDropdown/SelectableDropdown";

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
				<SelectableDropdown
					mapItem={account}
					items={props.types}
					placeHolder="Type"
					handleDropdownItemSelection={props.handleAccountUpdate}
				/>
			</div>
			<div className={classes.TableCategoryRow}>
				<SelectableDropdown
					mapItem={account}
					items={props.categories}
					placeHolder="Category"
					handleDropdownItemSelection={props.handleAccountUpdate}
				/>
			</div>
			<div className={classes.TableTotalRow}>{totalFilteredTransactions}</div>
			<div className={classes.TableButtonsRow}>
				<button
					className={classes.TableButtonsRowDeleteButton}
					id={account}
					onClick={() => props.handleAccountDelete(account)}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default accountCard;
