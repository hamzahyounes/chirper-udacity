import React, { Component } from 'react'
import { connect } from 'react-redux'

class TweetPage extends Component {
    render() {
        console.log("The TweetPage props are: ", this.props)
        return(
            <div>
                TWEET PAGE
            </div>
        )
    }
}

function mapStateToProps({ authedUser, tweets, users }, props ) {
    const { id } = props.match.params;
    return {
        id,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}
//

export default connect(mapStateToProps)(TweetPage)
