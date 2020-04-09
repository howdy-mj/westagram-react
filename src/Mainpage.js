import React, { Component } from 'react';
import './Mainpage.css';
import Nav from './components/Nav';
import Feeds from './components/Feeds';
import MainRight from './components/MainRight';

class Mainpage extends Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="main">
                    <Feeds />
                    <MainRight />
                </div>
            </div>
        );
    };
}

export default Mainpage;