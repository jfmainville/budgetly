import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Dashboard from "../../components/Dashboard/Dashboard";

class DashboardPanel extends Component {
	componentDidMount() {}

	render() {
		return (
			<Auxiliary>
				<Dashboard />
			</Auxiliary>
		);
	}
}

export default DashboardPanel;
