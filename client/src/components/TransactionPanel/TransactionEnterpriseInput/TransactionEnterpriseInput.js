import React from "react";
import PropEnterprises from "prop-types";
import classes from "./TransactionEnterpriseInput.module.scss";
import { Manager, Reference, Popper } from "react-popper";

const transactionEnterpriseInput = props => {
	const accounts = props.accounts;
	return (
		<Manager>
			<div className={classes.EnterpriseDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							ref={ref}
							className={classes.EnterpriseDropdownButton}
							onClick={props.handleShowEnterpriseDropdown}
						>
							<svg className={classes.EnterpriseDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down"/>
							</svg>
						</button>
					)}
				</Reference>
				<Reference>
					{({ ref }) => (
						<div className={classes.EnterpriseDropdown}>
							<input
								ref={ref}
								className={classes.EnterpriseDropdownInput}
								type="text"
								placeholder="Enterprise"
								value={props.enterpriseSearchInput}
								onChange={props.handleEnterpriseSearch}
							/>
							<button
								className={classes.EnterpriseDropdownClearButton}
								onClick={props.handleClearEnterpriseSearch}
							>
								X
							</button>
						</div>
					)}
				</Reference>
				{props.showEnterpriseDropdown ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={props.handleShowEnterpriseDropdown}
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
									{accounts.map((account, index) => {
										if (props.enterpriseSearchInput !== "") {
											const regex = new RegExp(
												"(" + props.enterpriseSearchInput + ")",
												"gi"
											);
											const match = account.enterprise.match(regex);
											if (match != null) {
												let parts = account.enterprise.split(match[0], 2);
												return (
													<div
														className={classes.ShowEnterpriseDropdownRow}
														key={index}
														onClick={() =>
															props.handleEnterpriseSearchSelection(account)
														}
													>
														<p className={classes.ShowEnterpriseDropdownTitle}>
															{parts[0]}
															<strong>{match[0]}</strong>
															{parts[1]}{" "}
														</p>
													</div>
												);
											}
										} else {
											return (
												<div
													className={classes.ShowEnterpriseDropdownRow}
													key={index}
													onClick={() => props.handleEnterpriseSearchSelection(account)}
												>
													<p className={classes.ShowEnterpriseDropdownTitle}>
														{account.enterprise}
													</p>
												</div>
											);
										}
										return null;
									})}
								</div>
							)}
						</Popper>
					</div>
				) : null}
			</div>
		</Manager>
	);
};

transactionEnterpriseInput.propEnterprises = {
	accounts: PropEnterprises.array,
	enterpriseSearchInput: PropEnterprises.string,
	showEnterpriseDropdown: PropEnterprises.bool,
	handleEnterpriseSearch: PropEnterprises.func,
	handleClearEnterpriseSearch: PropEnterprises.func,
	handleShowEnterpriseDropdown: PropEnterprises.func,
	handleEnterpriseSearchSelection: PropEnterprises.func
};

export default transactionEnterpriseInput;
