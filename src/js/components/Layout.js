import React from "react"
import TweetList from "./page/TweetList"
import Header from "./Header"

export default class Layout extends React.Component {
  render() {
    return <div>
      <Header />
      <TweetList />
    </div>
  }
}
