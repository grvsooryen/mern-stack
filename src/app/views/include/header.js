import React from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RouteNavItem from "../../components/route-nav-item";

export default class Header extends React.Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect staticTop className="mb-xs-0">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">MERN Stack</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <RouteNavItem eventKey={1} href="/">Home</RouteNavItem>
            <RouteNavItem eventKey={2} href="/demo">Demo</RouteNavItem>
            <RouteNavItem eventKey={3} href="/help">Help</RouteNavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}