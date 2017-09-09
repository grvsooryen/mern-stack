import React from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 'Demo'};
  }
  render() {
    return (
        <Jumbotron className="text-center">
            <h1>This is {this.state.page}</h1>
        </Jumbotron>
    );
  }
}