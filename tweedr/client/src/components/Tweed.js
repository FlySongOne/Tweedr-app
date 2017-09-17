import React, { Component } from 'react';


class Tweed extends Component {

  render() {
    console.log('Tweed rendering');
    return (
      <div className="Single-Tweed-Div">
        <h2>{this.props.tweed.content} </h2>
      </div>
    )

  }
}
export default Tweed;
