import React from 'react';
import classes from './TopToolbar.module.scss'
import {NavLink} from "react-router-dom";

const topToolbar = (props) => {
    return (
        <div className={classes.Navigation}>
            <div className={classes.Logo}>
                Budgetly
            </div>
            <div className={classes.NavigationItems}>
                <ul>
                    <li className={classes.NavigationItem}>
                        <NavLink
                            activeClassName={classes.NavigationItemLinkActive}
                            className={classes.NavigationItemLink}
                            to={"/"}
                            exact={true}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className={classes.NavigationItem}>
                        <NavLink
                            activeClassName={classes.NavigationItemLinkActive}
                            className={classes.NavigationItemLink}
                            to={"/transactions"}
                        >
                            Transactions
                        </NavLink>
                    </li>
                    <li className={classes.NavigationItem}>
                        <NavLink
                            activeClassName={classes.NavigationItemLinkActive}
                            className={classes.NavigationItemLink}
                            to={"/accounts"}
                        >
                            Accounts
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={classes.UserNavigation}>
                <div className={classes.Profile}>
                    <p className={classes.ProfileName}>Jean-Frederic Mainville</p>
                </div>
                <div className={classes.Settings}>
                    <button className={classes.SettingsButton}>
                        <svg className={classes.SettingsIcon}>
                            <use xlinkHref="/assets/sprite.svg#icon-cog"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default topToolbar;