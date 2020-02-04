import React from "react";
import classes from "./AccountCardCategoryDropdown.module.scss";
import { Manager, Reference, Popper } from "react-popper";

const accountCardCategoryDropdown = props => {
	const account_category = props.account.category;
	const account_id = props.account.id;
	const categories = props.categories;
	console.log(categories);

	return (
		<Manager>
			<div className={classes.CategoryDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							id={account_id}
							ref={ref}
							className={classes.CategoryDropdownButton}
							onClick={() => props.handleAccountCardCategoryDropdownShowDropdown(props.account)}
						>
							<svg className={classes.CategoryDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down"/>
							</svg>
						</button>
					)}
				</Reference>
				<Reference>
					{({ ref }) => (
						<p
							ref={ref}
							className={classes.CategoryDropdownText}
						>
							{account_category}
						</p>
					)}
				</Reference>
				{props.accountCardCategoryDropdownShowDropdown.id === account_id ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={props.handleAccountCardCategoryDropdownShowDropdown}
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
									{categories.map((category) =>
										<div
											className={classes.ShowCategoryDropdownRow}
											key={category.id}
											onClick={() => props.handleAccountUpdate(props.account, null, category)}
										>
											<p className={classes.ShowCategoryDropdownTitle}>
												{category.title}
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

export default accountCardCategoryDropdown;
