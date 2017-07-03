import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});
    dispatch({type: "FETCH_TWEETS_FULFILLED", payload: [{"id":"5910a105c60f6e010010c31b","text":"test tweet 2"},{"text":"test tweet 3","id":"5910a19ec60f6e010010c31c"},{"text":"This is an awesom tweet","id":"5910a1c2c60f6e010010c31d"},{"text":"This is an awesomer tweet","id":"5910a1c8c60f6e010010c31e"}]})

      //  axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      // .then((response) => {
      //   dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      // })
      // .catch((err) => {
      //   dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      // })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
