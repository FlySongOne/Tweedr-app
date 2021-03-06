
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
        onChange={this.props.handleInputContentValue}
      /><br/>
        <button id="submit">Post Tweed!!</button>
      </form>
    );
  }
}

export default TweedrForm;
