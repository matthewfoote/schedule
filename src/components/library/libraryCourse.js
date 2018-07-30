import React, { Component } from 'react';

import Icon from '../icon'

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {Icon('fas fa-check', 'library-course__icon')}
                
                
                { Icon('fas fa-plus-circle', 'library-course__action')}
                <div className="library-course__description">
                    <label> Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a libero sed nunc suscipit suscipit sed vitae diam. Donec id felis id justo eleifend sagittis a et diam. Vestibulum condimentum pulvinar lacinia. Morbi lorem ante, euismod nec tempus quis, vehicula at nulla. Proin condimentum tempor urna.</p>
                    </div>
            </div>
            )
    }
}

export default LibraryCourse;