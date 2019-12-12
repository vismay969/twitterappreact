import React from 'react';
import ViewTweet from './ViewTweet';

class ButtonPanel extends React.Component {
    displayTweet;
    tweetStore= [];

    constructor(props) {
        super(props);

        this.state = {
            tweet: '',
            displayTweet: '',
            enableView: 'false',
        };
    }

    updateTweet = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({enableView: 'false'});
        console.log(name + value);
        this.setState((state,props) => (
            {tweet:value}));
    };

    handleView = () => {
        this.setState({enableView: 'true'});
        console.log(this.state.enableView);
    };

    render() {
        this.displayTweet = '' ;
        if (this.props.page.viewTweet) {
            this.displayTweet = this.state.tweet;
            this.tweetStore.push(this.state.tweet);
            this.state.tweet = '';
            this.props.page.viewTweet = false;
        } else {
            this.displayTweet = '';
        }

        let datanew ={
            enable:this.state.enableView,
            tweetStore:this.tweetStore,
        };

        console.log(datanew);

        return (
            <div>
                <div className="col-md-8">
                <span> Tweet: {this.props.page.TweetCount}</span>
                <span> Retweet : {this.props.page.RetweetCount}</span>
                <span> Followers : {1000}</span>
                <span> Likes : {999} </span>
                <br/>
                <div>
                <textarea rows={5} cols={50} name={"Tweet1"}
                          value={this.state.tweet}
                          onChange={this.updateTweet}>
                </textarea>
                </div>
                <br/>
                <div>
                    <button
                        onClick={this.props.page.handleTweet}>Tweet
                    </button>
                    <button
                        onClick={this.props.page.handleRetweet}>Retweet
                    </button>
                    <button
                        onClick={this.handleView}>View Tweets
                    </button>

                </div>
                <br/>
                <div>
                    <span> {this.displayTweet}</span>
                </div>
                <br/>
                </div>
                <div>
                    <ViewTweet data = {datanew}/>
                </div>
            </div>
        );
    };

}
export default ButtonPanel;

