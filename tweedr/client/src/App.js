import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
      super();
      this.state = {
         tweeds :[],
         inputContentValue :'',
      }

 //     this.handleInputContentValue = this.handleInputContentValue.bind(this);
      this.handleTweedsSubmit = this.handleTweedsSubmit.bind(this);
  }

  handleTweedsSubmit(){

     axios('http://localhost:3001/api/tweeds/')
       .then(res => {

           this.setState({
             tweeds: res.data.data.tweeds,
            //  tweed_text: res.data.data.tweeds,
           })
           console.log(this.state.tweed_text);
       })
  }


  render() {
    return (
      <div className="App">
         <input id='input'/>
         <button onClick={this.handleTweedsSubmit}>Press this</button>

      </div>
    );
  }
}

export default App;
