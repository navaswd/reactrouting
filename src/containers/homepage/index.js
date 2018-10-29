import React, { Component } from 'react';
import FirstComp from '../../components/firstComp';
import './style.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:'coconut'
        }
    }
    handleSubmit = (event)=>{
        alert("Your Favourite dish is:"+this.state.value);
        event.preventDefault();
    }
    handleValue = (event)=>{

        console.log(event.target.value);
        this.setState({value:event.target.value})
    }
render(){
        return (
            <div className="firstext">
               <h1>This is Initial Module.</h1>
               <FirstComp testpropsvalue={this.state.value} testsubmit = {this.handleSubmit} testevent = {this.handleValue} />
            </div>
        );
    }
}

export default App;