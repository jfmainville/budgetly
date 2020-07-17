import React from "react";
import classes from "./DeleteButton.module.scss";

const deleteButton = props => {
	const item = props.item;
	return (
		<button
			className={classes.DeleteButton}
			id={item.id}
			onClick={() => props.handleDeleteButton(item)}
		>
			X
		</button>
	);
};

export default deleteButton;