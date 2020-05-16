import React from 'react'

export default class SimpleComponent extends React.Component
{
    state = {
        mood: "happy"
    }

    handleClick = () => {
        let currState = this.state.mood
        if(this.state.mood === "happy")
            currState = "sad"
        else
            currState = "happy"
        
        this.setState({
            mood: currState
        })
    }

    render()
    {
        return (
        <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}
