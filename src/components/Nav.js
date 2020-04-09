import React, { Component } from 'react';
import logoImg from '../img/logo_text.png';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="content">
                    <div className="one">
                        <img className="content-img-logo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
                        <img className="content-text-logo" src={logoImg} />
                    </div>
                    <div className="two">
                        <span><img className="search-icon" src="https://webstockreview.net/images/search-icon-png-9.png" /></span>
                        <input className="search" type="text" placeholder="검색" />
                    </div>
                    <div className="three">
                        <span><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" /></span>
                        <span><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" /></span>
                        <span><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" /></span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;