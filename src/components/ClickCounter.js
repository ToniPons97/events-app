import React from "react";

export class ClickCounter extends React.Component {

    handleClickEvent = () => {
        this.setState(state => {
            return {counter: state.counter + 1};
        });
    }

    state = {
        counter: 0
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleClickEvent}>Increment</button>
            </div>
        );
    }
}