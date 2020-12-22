import React from "react";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const navbar = () => {
	return (
		<React.Fragment>
			<div className={classes.Logo}>Budgetly</div>
			<div className={classes.Logout}>
				<NavLink
					activeClassName={classes.NavigationItemLinkActive}
					className={classes.NavigationItemLink}
					to={"/login"}
				>
					Logout
				</NavLink>
			</div>
		</React.Fragment>
	);
};

export default navbar;
