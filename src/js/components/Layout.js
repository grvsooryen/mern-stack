import React from "react"
import TweetList from "./page/TweetList"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ContactForm from "./page/ContactForm"
import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from 'react-router-dom'

export default class Layout extends React.Component {
  render() {
    return (<Router>
    <div>
      <Header />
      <Sidebar />
      <hr/>
       <ul>
        <li><Link to="/">TweetList</Link></li>
        <li><Link to="/ContactForm">ContactForm</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={TweetList}/>
        <Route path="/ContactForm" component={ContactForm}/>
      </Switch>
    </div>
  </Router>)
  }
}

