import React, { Component } from 'react';
import Nav from '../../Components/Nav';
import Feeds from '../../Components/Feeds';
import MainRight from '../../Components/MainRight';
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