import React from "react";
import { Route } from "react-router-dom";
import { NavItem } from "react-bootstrap";


export default class Navmenu extends React.Component {

  render() {
    let classes = "navmenu " + this.props.className;
    return (
      <div className={classes} id="navmenu">
      {
          this.props.children
      }
      </div>
    )
  }
}