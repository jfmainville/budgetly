import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Layout.module.scss";

const layout = props => {
	return (
		<div className={classes.Container}>
			<section className={classes.Navbar}>
				<Navbar/>
			</section>
			<div className={classes.Row}>
				<section className={classes.Sidebar}>
					<Sidebar/>
				</section>
				<section className={classes.Content}>
					{props.children}
				</section>
			</div>
		</div>

	);
};

export default layout;
