import React from "react";
import classes from "./TransactionCard.module.scss";
import PropTypes from "prop-types";
import { Manager, Popper, Reference } from "react-popper";
import DatePicker from "../../UI/Calendar/DatePicker/DatePicker";
import TransactionCardEnterpriseDropdown from "./TransactionCardEnterpriseDropdown/TransactionCardEnterpriseDropdown";

const transactionCard = props => {
	const transaction = props.transaction;
	const totalAmount = new Intl.NumberFormat("en-CA", {
		style: "currency",
		currency: "CAD"
	}).format(transaction.total);

	return (
		<div className={classes.TableRow}>
			<div className={classes.TableSelectRow}>
				<input className={classes.TableCheckboxInput} type="checkbox"/>
			</div>
			<Manager>
				<div className={classes.TableDateRow}>
					<Reference>
						{({ ref }) => (
							<div className={classes.TableDateRow}
									 ref={ref}
									 onClick={() => props.handleShowTransactionUpdateDatePicker(transaction)}>
								{transaction.date}
							</div>
						)}
					</Reference>
					{props.showTransactionUpdateDatePicker === transaction.id ? (
						<div className={classes.TransparentBackgroundWrapper}>
							<div
								onClick={props.handleShowTransactionUpdateDatePicker}
								className={classes.TransparentBackground}
							/>
							<Popper placement="bottom" positionFixed="true">
								{({ ref, style, placement }) => (
									<div
										ref={ref}
										style={style}
										data-placement={placement}
										className={classes.ShowTransactionDatePicker}
									>
										<DatePicker
											handleSelectedDate={props.handleSelectedDate}
										/>
									</div>
								)}
							</Popper>
						</div>
					) : null}
				</div>
			</Manager>
			<div className={classes.TableEnterpriseRow}>
				<TransactionCardEnterpriseDropdown
					transaction={transaction}
					accounts={props.accounts}
					handleTransactionCardEnterpriseDropdownShowDropdown={props.handleTransactionCardEnterpriseDropdownShowDropdown}
					transactionCardEnterpriseDropdownShowDropdown={props.transactionCardEnterpriseDropdownShowDropdown}
					handleTransactionUpdate={props.handleTransactionUpdate}
				/>
			</div>
			<div className={classes.TableTypeRow}>{transaction.type}</div>
			<div className={classes.TableCategoryRow}>{transaction.category}</div>
			<div className={classes.TableTotalRow}>{totalAmount}</div>
			<div className={classes.TableButtonsRow}>
				<button
					id={transaction}
					onClick={() => props.handleTransactionDelete(transaction)}
				>
					X
				</button>
			</div>
		</div>
	);
};

transactionCard.propTypes = {
	transaction: PropTypes.object,
	totalAmount: PropTypes.number
};

export default transactionCard;
