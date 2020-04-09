import React, { Component } from 'react';
import './Mainpage.css';
import Nav from '../Components/Nav';
import Feeds from './Feeds';
import MainRight from './MainRight';

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