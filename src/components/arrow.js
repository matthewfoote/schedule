import React, { Component} from 'react';

class Arrow extends Component {
    render() {
        return (
        <div className={`arrow ${this.props.className}`}>
        </div>
        )
    }
}

export default Arrow;