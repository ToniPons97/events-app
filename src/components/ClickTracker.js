import React from "react";

export class ClickTracker extends React.Component {

    state = {
        lastClickedBtn: undefined
    };

    lastClickedButton = (event) => {
        this.setState({lastClickedBtn: event.target.alt});
    }

    render() {
        return (
            <div>
                <h1>Clicked: {this.state.lastClickedBtn}!</h1>
                <button onClick={this.lastClickedButton}>
                    <img src={require('../images/charizard.png')}
                        alt='Charizard' />
                </button>
                <button onClick={this.lastClickedButton}>
                    <img src={require('../images/gengar.png')} 
                        alt='Gengar' />
                </button>
                <button onClick={this.lastClickedButton}>
                    <img src={require('../images/hariyama.png')} 
                        alt='Hariyama'/>
                </button>
            </div>
        );
    }
}