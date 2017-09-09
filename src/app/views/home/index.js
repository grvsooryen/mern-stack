import React from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {home: 'Home'};
  }
  render() {
    return (
        <Jumbotron className="text-center">
            <h1>This is {this.state.home}</h1>
        </Jumbotron>
    );
  }
}