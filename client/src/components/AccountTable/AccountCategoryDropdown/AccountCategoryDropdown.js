import React from "react";
import PropTypes from "prop-types";
import classes from "./AccountCategoryDropdown.module.scss";
import { Manager, Reference, Popper } from "react-popper";

const accountCategoryDropdown = props => {
	const categories = props.categories;
	return (
		<Manager>
			<div className={classes.CategoryDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							ref={ref}
							className={classes.CategoryDropdownButton}
							onClick={props.handleShowCategoryDropdown}
						>
							<svg className={classes.CategoryDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down" />
							</svg>
						</button>
					)}
				</Reference>
				<Reference>
					{({ ref }) => (
						<div className={classes.CategoryDropdown}>
							<input
								ref={ref}
								className={classes.CategoryDropdownInput}
								type="text"
								placeholder="Category"
								value={props.categorySearchInput}
								onChange={props.handleCategorySearch}
							/>
							<button
								className={classes.CategoryDropdownClearButton}
								onClick={props.handleClearCategorySearch}
							>
								X
							</button>
						</div>
					)}
				</Reference>
				{props.showCategoryDropdown ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={props.handleShowCategoryDropdown}
							className={classes.TransparentBackground}
						/>
						<Popper placement="bottom" positionFixed="true">
							{({ ref, style, placement }) => (
								<div
									ref={ref}
									style={style}
									data-placement={placement}
									className={classes.ShowCategoryDropdown}
								>
									{categories.map(category => {
										if (props.categorySearchInput !== "") {
											const regex = new RegExp(
												"(" + props.categorySearchInput + ")",
												"gi"
											);
											const match = category.title.match(regex);
											if (match != null) {
												let parts = category.title.split(match[0], 2);
												return (
													<div
														className={classes.ShowCategoryDropdownRow}
														key={category.id}
														onClick={() =>
															props.handleCategorySearchSelection(category)
														}
													>
														<p className={classes.ShowCategoryDropdownTitle}>
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
													className={classes.ShowCategoryDropdownRow}
													key={category.id}
													onClick={() =>
														props.handleCategorySearchSelection(category)
													}
												>
													<p className={classes.ShowCategoryDropdownTitle}>
														{category.title}
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

accountCategoryDropdown.propTypes = {
	categories: PropTypes.array,
	categorySearchInput: PropTypes.string,
	showCategoryDropdown: PropTypes.bool,
	handleCategorySearch: PropTypes.func,
	handleClearCategorySearch: PropTypes.func,
	handleShowCategoryDropdown: PropTypes.func,
	handleCategorySearchSelection: PropTypes.func
};

export default accountCategoryDropdown;
