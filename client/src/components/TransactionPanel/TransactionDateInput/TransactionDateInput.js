import React from "react";
import PropTypes from "prop-types";
import classes from "./TransactionDateInput.scss";

const transactionDateInput = props => {
	return (
		<div className={classes.NewTransactionDateSectionFields}>
			<input
				className={classes.NewTransactionDateSectionInput}
				type="text"
				value={props.transactionDate}
				onChange={props.handleTransactionDateInput}
				placeholder="Date"
			/>
		</div>
	);
};

transactionDateInput.propTypes = {
	transactionDate: PropTypes.string,
	handleTransactionDateInput: PropTypes.func,
};

export default transactionDateInput;
