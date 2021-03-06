import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import DashboardPanel from "./components/DashboardPanel/DashboardPanel";
import TransactionPanel from "./components/TransactionPanel/TransactionPanel";
import AccountPanel from "./components/AccountPanel/AccountPanel";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<Layout>
							<DashboardPanel />
						</Layout>
					)}
				/>
				<Route
					exact
					path="/transactions"
					render={() => (
						<Layout>
							<TransactionPanel />
						</Layout>
					)}
				/>
				<Route
					exact
					path="/accounts"
					render={() => (
						<Layout>
							<AccountPanel />
						</Layout>
					)}
				/>
			</Switch>
		);
	}
}

export default withRouter(App);
