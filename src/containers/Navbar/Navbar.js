import React, {Component} from 'react';
import TopToolbar from "../../components/TopToolbar/TopToolbar";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import {withRouter} from "react-router";


class Navbar extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Auxiliary>
                <TopToolbar

                />
            </Auxiliary>
        )
    }
}

export default withRouter(Navbar);