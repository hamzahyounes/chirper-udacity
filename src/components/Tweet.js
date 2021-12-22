import React, { Component} from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { formatTweet, formatDate } from '../utils/helpers'
import { handleToggleTweet } from '../actions/tweets'

class Tweet extends Component {
    handleLike = (e) => {
        e.preventDefault();
        //Todo: Handle Like
        const { dispatch, tweet, authedUser } = this.props;
        dispatch(handleToggleTweet({
            id: tweet.id,
            authedUser,
            hasLiked: tweet.hasLiked,
        }))
    }
    toParent = (e, id) => {
        e.preventDefault();
        //todo: Redirect to Parent tweet.
        console.log("Clicked")
    }
    render() {
        const { tweet } = this.props;
        if(!tweet)
            return <p>This tweet doesn't existed.</p>

        console.log(this.props)

        const { 
            name, avatar, timestamp, text, hasLiked, likes, replies, parent
        } = tweet;

        return(
            <div className="tweet">
                <img 
                    src={avatar}
                    alt= {`Avatar of ${name}`}
                    className="avatar"
                />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                        <button className="replying-to" onClick={e => this.toParent(e, parent.id)}>
                            Replying to @{parent.author}
                        </button>)}
                        <p>{text}</p>
                    </div>
                    <div className="tweet-icons">
                        <TiArrowBackOutline className="tweet-icon"/>
                        <span>{replies !== 0 && replies}</span>
                        <button className="heart-button" onClick={this.handleLike}>
                            {hasLiked
                                ? <TiHeartFullOutline color="e0245e" className="tweet-icon"/>
                                : <TiHeartOutline className="tweet-icon"/>}
                        </button>
                        <span>{likes? likes : null}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Tweet);

function mapStateToProps({ authedUser, users, tweets}, { id }) {
    //Remember: the second argument of mapStateToProps can be the props come from the parent [ownProps].
    //Recap: mapStateToProps(StoreState, [ownProps])
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }
}