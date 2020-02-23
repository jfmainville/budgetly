import React from "react";
import classes from "./TransactionAmountInput.module.scss";
import PropTypes from "prop-types";

const transactionAmountInput = props => {
	return (
		<div className={classes.NewTransactionSectionFields}>
			<input
				className={classes.NewTransactionSectionAmountInput}
				type="text"
				value={props.enterpriseAmountInput}
				onChange={props.handleEnterpriseAmountInput}
				placeholder="Amount"
			/>
		</div>
	);
};

export default transactionAmountInput;

transactionAmountInput.propTypes = {
	enterpriseAmountInput: PropTypes.bool,
	handleEnterpriseAmountInput: PropTypes.func
};