import React, { Component } from 'react'

export class SimpleComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             mood: 'happy'
        }
    }

    handleClick = ()=>{
        const {mood} = this.state 

        mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
    }
    
    render() {
        const {mood} = this.state
        return (
            <div onClick={this.handleClick}>
                {mood}
            </div>
        )
    }
}

export default SimpleComponent
