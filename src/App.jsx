import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            deadline: 'August 9, 2018',
            newDeadline : ''
        }
    }

    changeDeadline(){
      console.log('state ', this.state)
      this.setState(
            {
                deadline: this.state.newDeadline,
                newDeadline: this.state.newDeadline
            
            }
        
        
        )
        console.log('deadline ', this.state.deadline)
        console.log('new deadline ', this.state.newDeadline)
        
    }

    render(){
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline} , {this.state.newDeadline}
                </div>  
                <div>
                    <div className="clock-days">16 days</div>
                    <div className="clock-hours">16 hours</div>
                    <div className="clock-mins">16 minutes</div>
                    <div className="clock-seconds">16 seconds</div>
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter a Date"
                        onChange={event => this.setState({newDeadline : event.target.value})}   
                    />
                    <button onClick={() => this.changeDeadline()} >Submit</button>
                </div>
            </div> 
        )
    }
}

export default App;