import React from "react";
import classes from "./TransactionCardEnterpriseDropdown.module.scss";
import { Manager, Reference, Popper } from "react-popper";

const transactionCardEnterpriseDropdown = props => {
	const accounts = props.accounts;
	const transaction = props.transaction;

	return (
		<Manager>
			<div className={classes.EnterpriseDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							id={transaction.id}
							ref={ref}
							className={classes.EnterpriseDropdownButton}
							onClick={() => props.handleTransactionCardEnterpriseDropdownShowDropdown(transaction)}
						>
							<svg className={classes.EnterpriseDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down"/>
							</svg>
						</button>
					)}
				</Reference>
				<Reference>
					{({ ref }) => (
						<p
							ref={ref}
							className={classes.EnterpriseDropdownText}
						>
							{transaction.enterprise}
						</p>
					)}
				</Reference>
				{props.transactionCardEnterpriseDropdownShowDropdown.id === transaction.id ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={props.handleTransactionCardEnterpriseDropdownShowDropdown}
							className={classes.TransparentBackground}
						/>
						<Popper placement="bottom" positionFixed="true">
							{({ ref, style, placement }) => (
								<div
									ref={ref}
									style={style}
									data-placement={placement}
									className={classes.ShowEnterpriseDropdown}
								>
									{accounts.map((account) =>
										<div
											className={classes.ShowEnterpriseDropdownRow}
											key={account.id}
											onClick={() => props.handleTransactionUpdate(null, account)}
										>
											<p className={classes.ShowEnterpriseDropdownTitle}>
												{account.enterprise}
											</p>
										</div>
									)}
								</div>
							)}
						</Popper>
					</div>
				) : null}
			</div>
		</Manager>
	);
};

export default transactionCardEnterpriseDropdown;
