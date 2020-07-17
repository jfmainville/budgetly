import React, { useState } from "react";
import classes from "./SelectableDropdown.module.scss";
import { Manager, Reference, Popper } from "react-popper";

const selectableDropdown = props => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [showDropdownId, setShowDropdownId] = useState("");

	const handleShowDropdownUpdate = (item) => {
		setShowDropdown(!showDropdown);
		if (item) {
			setShowDropdownId(item.id);
		} else {
			setShowDropdownId("");
		}
	};

	const mapItem = props.mapItem;
	const items = props.items;
	const placeHolder = props.placeHolder;

	return (
		<Manager>
			<div className={classes.SelectableDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							id={mapItem.id}
							ref={ref}
							className={classes.SelectableDropdownButton}
							onClick={() => handleShowDropdownUpdate(mapItem)}
						>
							<svg className={classes.SelectableDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down"/>
							</svg>
						</button>
					)}
				</Reference>
				{items.map((item) =>
					<Reference
						key={item.id}
					>
						{({ ref }) => (
							<p
								ref={ref}
								className={classes.ShowSelectableDropdownTitle}
							>
								{item.name === mapItem[placeHolder.toLowerCase()] ? item.name : null}
							</p>
						)}
					</Reference>
				)}
				{showDropdownId === mapItem.id ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={handleShowDropdownUpdate}
							className={classes.TransparentBackground}
						/>
						<Popper placement="bottom" positionFixed="true">
							{({ ref, style, placement }) => (
								<div
									ref={ref}
									style={style}
									data-placement={placement}
									className={classes.ShowSelectableDropdown}
								>
									{items.map((item) =>
										<div
											className={classes.ShowSelectableDropdownRow}
											key={item.id}
											onClick={() => {
												props.handleDropdownItemSelection(mapItem, placeHolder, item);
												handleShowDropdownUpdate();
											}}
										>
											<p className={classes.ShowSelectableDropdownTitle}>
												{item.name}
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

export default selectableDropdown;
