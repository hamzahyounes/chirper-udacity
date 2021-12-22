import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    //We used connect()(), so dispatch function will be stuck with your component props.
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {
          this.props.loading 
          ? null
          : <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
//Hint: Using connect()() upgrades the component to container component.
//VIH: We don't need anything from the state, so we left the first paranthesses empty.

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}