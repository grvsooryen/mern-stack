import React from "react";
import { Nav } from "react-bootstrap";

import Navmenu from "../../../components/navmenu";
import RouteNavItem from "../../../components/route-nav-item";


export default class SideBar extends React.Component {

  render() {
        return (
            <Navmenu className="navbar-default navmenu-fixed-left offcanvas-xs mt-navbar-height">
                <Nav className="navbar-nav">
                <RouteNavItem eventKey={4} href="/">Home</RouteNavItem>
                <RouteNavItem eventKey={5} href="/demo">Demo</RouteNavItem>
                <RouteNavItem eventKey={6} href="/help">Help</RouteNavItem>
                </Nav>
            </Navmenu>
        )
    }
}