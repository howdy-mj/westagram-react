import React, { Component } from 'react';
import Nav from '../Components/Nav';
import Feeds from './Feeds';
import MainRight from './MainRight';
import './Mainpage.scss';

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