import React from "react";
import PropTypes from "prop-types";
import classes from "./AccountTypeDropdown.module.scss";
import { Manager, Reference, Popper } from "react-popper";

const accountTypeDropdown = props => {
	const types = props.types
	return (
		<Manager>
			<div className={classes.TypeDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							ref={ref}
							className={classes.TypeDropdownButton}
							onClick={props.handleShowTypeDropdown}
						>
							<svg className={classes.TypeDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down" />
							</svg>
						</button>
					)}
				</Reference>
				<Reference>
					{({ ref }) => (
						<div className={classes.TypeDropdown}>
							<input
								ref={ref}
								className={classes.TypeDropdownInput}
								type="text"
								placeholder="Type"
								value={props.typeSearchInput}
								onChange={props.handleTypeSearch}
							/>
							<button
								className={classes.TypeDropdownClearButton}
								onClick={props.handleClearTypeSearch}
							>
								X
							</button>
						</div>
					)}
				</Reference>
				{props.showTypeDropdown ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={props.handleShowTypeDropdown}
							className={classes.TransparentBackground}
						/>
						<Popper placement="bottom" positionFixed="true">
							{({ ref, style, placement }) => (
								<div
									ref={ref}
									style={style}
									data-placement={placement}
									className={classes.ShowTypeDropdown}
								>
									{types.map((type, index) => {
										if (props.typeSearchInput !== "") {
											const regex = new RegExp(
												"(" + props.typeSearchInput + ")",
												"gi"
											);
											const match = type.match(regex);
											if (match != null) {
												let parts = type.split(match[0], 2);
												return (
													<div
														className={classes.ShowTypeDropdownRow}
														key={index}
														onClick={() =>
															props.handleTypeSearchSelection(type)
														}
													>
														<p className={classes.ShowTypeDropdownTitle}>
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
													className={classes.ShowTypeDropdownRow}
													key={index}
													onClick={() => props.handleTypeSearchSelection(type)}
												>
													<p className={classes.ShowTypeDropdownTitle}>
														{type}
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

accountTypeDropdown.propTypes = {
	accounts: PropTypes.array,
	types: PropTypes.array,
	typeSearchInput: PropTypes.string,
	showTypeDropdown: PropTypes.bool,
	handleTypeSearch: PropTypes.func,
	handleClearTypeSearch: PropTypes.func,
	handleShowTypeDropdown: PropTypes.func,
	handleTypeSearchSelection: PropTypes.func
};

export default accountTypeDropdown;
