import React, { Component } from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }
    Decrement = () =>{
        this.setState({count: this.state.count - 1});
    }
    Increment = () =>{
        this.setState({count : this.state.count + 1});
    }
    render() {
        return(
            <>
            <h1> This is Class Component </h1>
            <button onClick={this.Decrement}>Decrement</button>
            <p>{this.state.count}</p>
            <button onClick={this.Increment}>Increment</button>
            </>
        )
    }
}

export default ClassCounter;
