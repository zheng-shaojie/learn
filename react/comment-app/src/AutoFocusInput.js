import React, { Component } from "react";

class AutoFocusInput extends Component {
    componentDidMount () {
        console.log(this.input)
        this.input.focus()
    }

    render () {
        return (
            <div style={ {width: '500px' } } ref={(input) => this.input = input} />
        )
    }
}

export default AutoFocusInput;
