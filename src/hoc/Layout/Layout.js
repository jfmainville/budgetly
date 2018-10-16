import React from 'react';
import Navbar from "../../containers/Navbar/Navbar";
import classes from './Layout.module.scss';
import Content from "../Content/Content";


const layout = (props) => {
    return (
        <div className={classes.Container}>
            <Navbar/>
            <div className={classes.Content}>
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
};

export default layout;