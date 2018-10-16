import React, {Component} from 'react';
import TopToolbar from "../../components/TopToolbar/TopToolbar";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import {withRouter} from "react-router";


class Navbar extends Component {
    state = {
        profile: {name: "Jean-Frederic Mainville"}
    };

    componentDidMount() {

    }

    render() {
        return (
            <Auxiliary>
                <TopToolbar
                    profile={this.state.profile}
                />
            </Auxiliary>
        )
    }
}

export default withRouter(Navbar);