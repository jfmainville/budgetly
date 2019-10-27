import React from "react";
import classes from "./TransactionCard.module.scss";
import PropTypes from "prop-types";

const transactionCard = props => {
	const transaction = props.transaction;
	const totalAmount = new Intl.NumberFormat("en-CA", {
		style: "currency",
		currency: "CAD"
	}).format(transaction.total);
	return (
		<div className={classes.TableRow}>
			<div className={classes.TableSelectRow}>
				<input className={classes.TableCheckboxInput} type="checkbox" />
			</div>
			<div className={classes.TableEnterpriseRow}>{transaction.date}</div>
			<div className={classes.TableEnterpriseRow}>{transaction.enterprise}</div>
			<div className={classes.TableTypeRow}>{transaction.type}</div>
			<div className={classes.TableCategoryRow}>{transaction.category}</div>
			<div className={classes.TableTotalRow}>{totalAmount}</div>
		</div>
	);
};

transactionCard.propTypes = {
	transaction: PropTypes.object,
	totalAmount: PropTypes.number
};

export default transactionCard;
