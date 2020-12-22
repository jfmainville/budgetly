import React from "react";
import classes from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const sidebar = () => {
	return (
		<div className={classes.Sidebar}>
			<li className={classes.NavigationItem}>
				<NavLink
					activeClassName={classes.NavigationItemLinkActive}
					className={classes.NavigationItemLink}
					to={"/"}
					exact={true}
				>
					<svg className={classes.Icon}>
						<use xlinkHref="/assets/sprite.svg#icon-bar-graph"/>
					</svg>
					Dashboard
				</NavLink>
			</li>
			<li className={classes.NavigationItem}>
				<NavLink
					activeClassName={classes.NavigationItemLinkActive}
					className={classes.NavigationItemLink}
					to={"/transactions"}
				>
					<svg className={classes.Icon}>
						<use xlinkHref="/assets/sprite.svg#icon-text-document"/>
					</svg>
					Transactions
				</NavLink>
			</li>
			<li className={classes.NavigationItem}>
				<NavLink
					activeClassName={classes.NavigationItemLinkActive}
					className={classes.NavigationItemLink}
					to={"/accounts"}
				>
					<svg className={classes.Icon}>
						<use xlinkHref="/assets/sprite.svg#icon-wallet"/>
					</svg>
					Accounts
				</NavLink>
			</li>
		</div>
	);
};

export default sidebar;
