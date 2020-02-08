import React from "react";
import PropTypes from "prop-types";
import classes from "./TransactionDatePicker.module.scss";
import { Manager, Reference, Popper } from "react-popper";
import DatePicker from "../../UI/Calendar/DatePicker/DatePicker";

const transactionDatePicker = props => {
	return (
		<Manager>
			<div className={classes.TransactionDatePicker}>
				<Reference>
					{({ ref }) => (
						<button
							ref={ref}
							className={classes.TransactionDatePickerButton}
							onClick={props.handleShowTransactionDatePicker}
						>
							<svg className={classes.TransactionDatePickerButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down"/>
							</svg>
						</button>
					)}
				</Reference>
				{props.showTransactionDatePicker ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={props.handleShowTransactionDatePicker}
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
									<DatePicker/>
								</div>
							)}
						</Popper>
					</div>
				) : null}
			</div>
		</Manager>
	);
};

transactionDatePicker.propTypes = {
	showTransactionDatePicker: PropTypes.bool,
	handleShowTransactionDatePicker: PropTypes.func,
};

export default transactionDatePicker;
