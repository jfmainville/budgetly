import React from "react";
import classes from "./InputField.module.scss";

const inputField = props => {
	const handleInputData = event => {
		const data = event.target.value;
		props.handleInputSelection(data);
	};

	const inputData = props.inputData;
	const placeHolder = props.placeHolder;

	return (
		<div className={classes.InputField}>
			<input
				className={classes.InputFieldInput}
				type="text"
				value={inputData}
				onChange={(event) => handleInputData(event)}
				placeholder={placeHolder}
			/>
		</div>
	);
};

export default inputField;
