import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TweedrForm from './components/TweedrForm';
import TweedrFeed from './components/TweedrFeed';

class App extends Component {
  constructor(){
      super();
      this.state = {
         tweeds :[],
         inputContentValue :'',
      }

      this.handleInputContentValue = this.handleInputContentValue.bind(this);
      this.handleTweedsSubmit = this.handleTweedsSubmit.bind(this);
  }

  componentDidMount(){
     axios('http://localhost:3001/api/tweeds/')
        .then(res => {
            this.setState(prevState=>{
               console.log('componentDid before return ',res.data.data.tweeds )
               return{
                  tweeds:res.data.data.tweeds,
               }
            });

        });
  }

  handleTweedsSubmit(event){

     console.log('handleTweedsSubmit');
     axios.post('http://localhost:3001/api/tweeds/', {
       tweed: this.state.inputContentValue,
     })
     .then(res => {
      {
         const tweed ={
           tweeds: res.data.data.tweeds,
         }

        console.log("handleTweedsSub" , this.state);

        this.setState((prevState)=>{
            return{
                tweeds: prevState.tweeds.concat(tweed)
            }
        })
     }
    }).catch(err =>console.log(err));
 }

  handleInputContentValue(event) {
    this.setState({
      inputContentValue: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
         <TweedrForm
             handleTweedsSubmit={this.handleTweedsSubmit}
             handleInputContentValue={this.handleInputContentValue}
             inputContentValue={this.state.inputContentValue}
         />
         <TweedrFeed
             data={this.state.tweeds}

         />
      </div>
    );
  }
}

export default App;
