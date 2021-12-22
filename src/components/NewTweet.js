import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

class NewTweet extends Component {
    state= {
        text: ""
    }

    handleChange = (e) => {
        const text = e.target.value;
        this.setState({
            text
        })
    }
    handleSubmit = e => {
        const { text } = this.state;
        const { dispatch, id } = this.props;
        e.preventDefault();

        this.setState(() => this.setState({
            text: ''
        }))
        dispatch(handleAddTweet(text, id))

    }
    render() {
        const { text } = this.state;
        const tweetLeft = 280 - text.length;
        return(
            <div>
                <h3 className="center">Compose new tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea 
                        placeholder= "What's happening?"
                        className="textarea"
                        maxLength= {280}
                        value= {text}
                        onChange= {this.handleChange}
                    />

                    <button
                        className="btn"
                        type="submit"
                        disabled= {text === ''}
                    >
                        Submit
                    </button>
                    {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
                </form>

            </div>
        )
    }
}

export default connect()(NewTweet);