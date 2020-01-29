import React from "react";
import classes from "./AccountEnterpriseInput.module.scss";

const accountEnterpriseInput = props => {
	return (
		<div className={classes.NewAccountSectionFields}>
			<input
				className={classes.NewAccountSectionEnterpriseInput}
				type="text"
				value={props.enterpriseInput}
				onChange={props.handleEnterpriseInput}
				placeholder="Enterprise"
			/>
		</div>
	);
};

export default accountEnterpriseInput;
