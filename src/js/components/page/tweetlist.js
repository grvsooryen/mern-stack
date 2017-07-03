import React from "react"
import { connect } from "react-redux"

import { fetchUser } from  "../../actions/userActions"
import { fetchTweets, addTweet } from "../../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class TweetList extends React.Component {
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
      return <div className="container"><button onClick={this.fetchTweets.bind(this)} className="btn btn-primary">load tweets</button></div>
    }

    const mappedTweets = tweets.map(tweet => <li  className="list-group-item" key={tweet.id}>{tweet.text}</li>)

    return <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="form-group">
            <label className="control-label" for="focusedInput">To add New tweet add Text and Press Enter</label>
            <input className="form-control" id="focusedInput" type="text" placeholder="Add new tweets..." onKeyUp={this.keyUpHandler.bind(this)} />
          </div>
          </div>
          
        </div>
                <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            {/*<h1>{user.name}</h1>*/}
            <h1>Tweets</h1>
      <ul className="list-group">{mappedTweets}</ul>
          </div>
          
        </div>
      {/*<div> To add New tweet add Text and Press Enter</div>
      <div> <input type="text" className="form-control" onKeyUp={this.keyUpHandler.bind(this)}/></div>*/}
    
    </div>
  }
}
