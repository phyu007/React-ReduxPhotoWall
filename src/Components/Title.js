import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    render() {
    return(
            <h1>{this.props.title}</h1>
        )
    }
}

export default Title