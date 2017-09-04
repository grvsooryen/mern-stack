import React from "react"
import { connect } from "react-redux"

import { fetchUser } from  "../../actions/userActions"
import { fetchTweets, addTweet, deleteTweet, updateTweet } from "../../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class ContactForm extends React.Component {

  constructor(props){
    super(props);
  this.state = {id: 0,text:""};

  }

  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  keyUpHandler(id,e){
    console.log(e);
    console.log(id);
    //  this.setState({
    //         id: id
    //     })
    if(e.target.value == ""){
      return false;
    }

    if(e.keyCode===13) {

      if(id != 0)
      {
        this.props.dispatch(updateTweet(id,e.target.value))
      }else{
        this.addTweets(e.target.value)  // this will handle textbox event
      //e.target.value = '';            // this will make textbox empty
    }
    e.target.value = '';
       this.setState({
            id: 0,
            text:""
        });
        // console.log(id);
    }
  }

  addTweets(value){
      this.props.dispatch(addTweet(Date.now(),value))
  }

  removeTweet(tweetid){
      this.props.dispatch(deleteTweet(tweetid))
  }

   updateTweet(tweetid, tweettext){
     this.setState({
            id: tweetid,
            text:tweettext
        })
        var el = document.getElementById("focusedInput");
        el.value = tweettext;
        //console.log(tweetid);
        //console.log(tweettext);
        //this.props.dispatch(updateTweet(tweetid,tweettext))
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;
    let textid = 0;
    if (tweets.length) {
      return <div className="container"><button onClick={this.fetchTweets.bind(this)} className="btn btn-primary">load tweets</button></div>
    }

    const mappedTweets = tweets.map(tweet => <li className="list-group-item" key={tweet.id} onClick={this.updateTweet.bind(this,tweet.id, tweet.text)}> 
      {tweet.text}
        <button type="button" className="close" onClick={this.removeTweet.bind(this,tweet.id)}>&times;</button>
      </li>)

    return (<div className="container">
              <div className="col-md-5">
                  <div className="form-area">  
                      <form role="form">
                      <br />
                                  <h3>Contact Form</h3>
                          <div className="form-group">
                          <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                                  <div className="form-group">
                                  <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
                                      <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>                    
                                  </div>
                          
                      <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
                      </form>
                  </div>
              </div>
          </div>)
  }
}
