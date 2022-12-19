import React from "react";

export class ClickTracker extends React.Component {

    state = {
        lastClickedBtn: undefined
    };

    lastClickedButton = (event) => {
        if (event.target.alt)
            this.setState({lastClickedBtn: event.target.alt});
        else
            this.setState({lastClickedBtn: event.target.firstChild.alt});
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