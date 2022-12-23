import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0
    };
    
    constructor(props) {
        super(props);
        
        setInterval(() => {
            this.setState(state => {
                return {
                    count: state.count + 1
                }
            });
        }, 1000);
    }
    
    render() {
        const counterStyles = {
            display: 'inline-block',
            color: this.state.count < 5 ? 'red' : 'green',
            opacity: this.state.count < 9 
                ? this.state.count * 0.1 : 1,
            border: this.state.count < 10 ? 'none' : '3px solid blue'
        };

        return <h1 style={counterStyles}>Count: {this.state.count}</h1>;
    }
}