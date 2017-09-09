import React from 'react';

export default class Notfound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {home: 'Home'};
  }
  render() {
    return (
      <div className="container container-login text-center">
        <h1><span className="fs-xs-4-0 text-danger">404</span></h1>
        <h2>Page Not Found</h2>
      </div>
    );
  }
}