import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets, addTweet } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  keyUpHandler(e){
    if(e.keyCode===13) {
      this.addTweets(e.target.value)  // this will handle textbox event
      e.target.value = '';            // this will make textbox empty
    }
  }

  addTweets(value){
      this.props.dispatch(addTweet(Date.now(),value))
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

    return <div>
      <div> To add New tweet add Text and Press Enter</div>
      <div> <input type="text" onKeyUp={this.keyUpHandler.bind(this)}/></div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}
