import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"
import store from "./store"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
 <Switch>
        <Route exact path="/" component={Layout}/>
        <Route path="/ContactForm" component={Layout}/>
      </Switch>
  </BrowserRouter>
</Provider>, app);
