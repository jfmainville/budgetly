import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Layout.module.scss";

const layout = props => {
	return (
		<div className={classes.Container}>
			<section className={classes.Navbar}>
				<Navbar/>
			</section>
			<section className={classes.Content}>
				{props.children}
			</section>
		</div>

	);
};

export default layout;
