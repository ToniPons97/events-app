import React from "react";

export class ClickTracker extends React.Component {

    state = {
        lastClickedBtn: undefined
    };

    lastClickedButton = (event) => {
        this.setState({lastClickedBtn: event.target.innerText});
    }

    render() {
        return (
            <div>
                <h1>Clicked {this.state.lastClickedBtn}!</h1>
                <button onClick={this.lastClickedButton}>Button 1</button>
                <button onClick={this.lastClickedButton}>Button 2</button>
                <button onClick={this.lastClickedButton}>Button 3</button>
            </div>
        );
    }
}