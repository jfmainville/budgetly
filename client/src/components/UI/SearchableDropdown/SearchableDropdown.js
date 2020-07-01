import React, { useState } from "react";
import classes from "./SearchableDropdown.module.scss";
import { Manager, Reference, Popper } from "react-popper";

const searchableDropdown = props => {
	const [searchInput, setSearchInput] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);

	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleSearch = event => {
		const searchInput = event.target.value;
		setShowDropdown(true);
		setSearchInput(searchInput);
	};

	const handleClearSearch = () => {
		setShowDropdown(false);
		setSearchInput("");
	};

	const handleSearchSelection = item => {
		const placeHolder = props.placeHolder;
		setSearchInput(item.name);
		setShowDropdown(false);
		props.handleItemSelection(placeHolder, item);
	};

	const items = props.items;
	const placeHolder = props.placeHolder;

	return (
		<Manager>
			<div className={classes.SearchableDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							ref={ref}
							className={classes.SearchableDropdownButton}
							onClick={handleShowDropdown}
						>
							<svg className={classes.SearchableDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down"/>
							</svg>
						</button>
					)}
				</Reference>
				<Reference>
					{({ ref }) => (
						<div className={classes.SearchableDropdown}>
							<input
								ref={ref}
								className={classes.SearchableDropdownInput}
								type="text"
								placeholder={placeHolder}
								value={searchInput}
								onChange={(event) => handleSearch(event)}
							/>
							<button
								className={classes.SearchableDropdownClearButton}
								onClick={() => handleClearSearch()}
							>
								X
							</button>
						</div>
					)}
				</Reference>
				{showDropdown ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={() => handleShowDropdown()}
							className={classes.TransparentBackground}
						/>
						<Popper placement="bottom" positionFixed="true">
							{({ ref, style, placement }) => (
								<div
									ref={ref}
									style={style}
									data-placement={placement}
									className={classes.ShowSearchableDropdown}
								>
									{items.map((item, index) => {
										if (searchInput !== "") {
											const regex = new RegExp(
												"(" + searchInput + ")",
												"gi"
											);
											const match = item.name.match(regex);
											if (match != null) {
												let parts = item.name.split(match[0], 2);
												return (
													<div
														className={classes.ShowSearchableDropdownRow}
														key={index}
														onClick={() => handleSearchSelection(item)
														}
													>
														<p className={classes.ShowSearchableDropdownTitle}>
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
													className={classes.ShowSearchableDropdownRow}
													key={index}
													onClick={() => handleSearchSelection(item)}
												>
													<p className={classes.ShowSearchableDropdownTitle}>
														{item.name}
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

export default searchableDropdown;
