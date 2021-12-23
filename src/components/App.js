import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    //We used connect()(), so dispatch function will be stuck with your component props.
  }
  render() {
    return (
      <React.Fragment>
        <LoadingBar />

        <div className='container'>
          <Nav />
          {
            this.props.loading 
            ? null
            : <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/tweet/:id" component={TweetPage} />
                <Route path="/new" component={NewTweet} />
            </div>
          }
        </div>
      </React.Fragment>
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