import React, { Component } from 'react';
import logo from '../assets/nba-logoman-word-white.svg';

export default class TopNavBar extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

//export default TopNavBar;