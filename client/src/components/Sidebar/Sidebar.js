import React from "react";
import classes from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const sidebar = props => {
	return (
		<React.Fragment>
			<ul>
				<li className={classes.NavigationItem}>
					<NavLink
						activeClassName={classes.NavigationItemLinkActive}
						className={classes.NavigationItemLink}
						to={"/"}
						exact={true}
					>
						<svg className={classes.Icon}>
							<use xlinkHref="/assets/sprite.svg#icon-stats-bars"/>
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
							<use xlinkHref="/assets/sprite.svg#icon-file-text"/>
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
							<use xlinkHref="/assets/sprite.svg#icon-credit-card"/>
						</svg>
						Accounts
					</NavLink>
				</li>
			</ul>
		</React.Fragment>
	);
};

export default sidebar;
