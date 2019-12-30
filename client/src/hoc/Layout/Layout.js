import React from "react";
import TopToolbar from "../../components/TopToolbar/TopToolbar";
import classes from "./Layout.module.scss";
import Content from "../Content/Content";

const layout = props => {
	return (
		<div className={classes.Container}>
			<TopToolbar />
			<div className={classes.Content}>
				<Content>{props.children}</Content>
			</div>
		</div>
	);
};

export default layout;
