import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./Navbar.module.scss";

const navbar = props => {
	const [profileName] = useState("Jean-Frederic Mainville");
	return (
		<React.Fragment>
			<div className={classes.Logo}>Budgetly</div>
			<div className={classes.UserNavigation}>
				<div className={classes.Profile}>
					<p className={classes.ProfileName}>{profileName}</p>
				</div>
				<div className={classes.Settings}>
					<button className={classes.SettingsButton}>
						<svg className={classes.SettingsIcon}>
							<use xlinkHref="/assets/sprite.svg#icon-cog"/>
						</svg>
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

navbar.propTypes = {
	profileName: PropTypes.string
}

export default navbar;
