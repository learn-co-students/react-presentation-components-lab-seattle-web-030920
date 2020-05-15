import React, {Component} from 'react';

class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            let newState = ""
            prevState.mood === "happy" ? newState = "sad" : newState = "happy"
            return({mood: newState})
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent