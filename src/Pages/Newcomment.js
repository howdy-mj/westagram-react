import React, { Component } from 'react';

class NewComment extends Component {
    render() {
        return (
            <p>
                <a>{this.props.myName}</a>
                <span>{this.props.comment}</span>
            </p>
        );
    }
}

export default NewComment;