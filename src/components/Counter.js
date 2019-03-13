import React, { Component } from 'react';
// import './Counter.css';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
	render() {
		return (
			<div className= "plusCount">
            <h1>{this.state.count}</h1>
            <button onClick={this.addOne}>+</button>
            <button onClick={this.reset}>reset</button>
            </div>
            
		);
    }

	addOne = () => {
		this.setState({
			count: this.state.count + 1
		});
    };

    reset = () => {
        var pressYes = window.confirm("Do you want to reset?");
        if(pressYes){
            this.setState({
                count: 0
            });
        }
	}
}

export default Counter;


// import React, { Component } from 'react';
// //import 'Counter.css';

// class Counter extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			color: 0
// 		}
// 	}

// 	render() {
// 		var colors = ["red", "green", "purple", "yellow", "blue"];
// 		return (
// 			<p onClick={this.changeColor}>Hello {this.props.person} and my color is {colors[this.state.color]}</p>
// 		);
// 	}

// 	changeColor = () => {
// 		this.setState({
// 			color: Math.floor(Math.random() * 5)
// 		});
// 	}
// }

// export default Counter;