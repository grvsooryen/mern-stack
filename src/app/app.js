import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, hashHistory, Switch } from 'react-router-dom';

import Header from './views/include/header';
import Footer from './views/include/footer';
import Home from './views/home';
import Demo from './views/demo';
import Notfound from './views/notfound';

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/demo' component={Demo}/>
          <Route component={Notfound}/>
        </Switch>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
