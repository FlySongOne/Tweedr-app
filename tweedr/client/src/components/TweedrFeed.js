import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
  render() {
    console.log('TweedrFeed rendering');
    console.log(this.props.data);
    return (
      <div id="TweedrFeedDiv">
        {this.props.data.map((ele,i) => <Tweed tweed={ele} key={i}/> )}
      </div>
      )
    }
}

export default TweedrFeed;
