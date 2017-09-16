
import React, { Component } from "react";

class TweedrForm extends Component {
  render() {
    return (
      <form
        className="add-tweed-form"
        onSubmit={this.props.handleTweedsSubmit}
      >
      <input
          type="text"
          value={this.props.inputContentValue}
          name="content"
          placeholder="Add your Thoughts"
          //Need to add handleInputContentChange to App.js
          onChange={this.props.handleInputContentChange}
      /><br/>
        <button id="submit">Post Tweed!!</button>
      </form>
    );
  }
}

export default TweedrForm;
