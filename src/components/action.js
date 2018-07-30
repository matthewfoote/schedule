import React, { Component} from 'react';
import Icon from './icon';

class Action extends Component {
    render() {
        return (
            Icon('fas fa-plus-circle', 'library-course__action')
            // fas fa-times-circle
        )
    }
}

export default Action;