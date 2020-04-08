import React, { Component } from 'react';
import './Mainpage.css';
import logoImg from './img/logo_text.png';

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

class FeedsComment extends Component {
    render() {
        return (
            <div className="comment-container">
                <div className="comment-box">
                        <p><a>canon_mj</a><span>위워크에서 어쩌구 저쩌구</span></p>
                        <p><a>neceosecius</a><span>빨리 끝내고 싶다ㅏ</span></p>
                    </div>
                    <p className="comment-time">42분 전</p>
                    <div className="new-comment">
                        <input type="text" placeholder="댓글 달기..." />
                        <button>게시</button>
                    </div>
            </div>
        );
    }
}

class Feeds extends Component {
    render() {
        return (
            <div className="feeds">
                <article>
                    <header>
                        <div className="header-left">
                            <img src="https://pbs.twimg.com/profile_images/1109389733912666112/XX55fTPf.jpg" />
                            <div className="header-p">
                                <p className="name">wecode_bootcamp</p>
                                <p className="location">WeCode - 위코드</p>
                            </div>
                        </div>
                        <div className="header-right">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                        </div>
                    </header>
                    <div className="main-img-container">
                        <img className="main-img"
                            src="https://img.travelawaits.com/quill/f/c/f/6/b/b/fcf6bb1ba5b6ccf979f1932366f5c53ad7c13745.jpg" />
                    </div>
                    <div className="emotion">
                        <div class="emo-left">
                            <span className="emo-left-heart"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" /></span>
                            <span className="emo-left-comment"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" /></span>
                            <span className="emo-left-share"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" /></span>
                        </div>
                        <div className="emo-right">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                        </div>
                    </div>
                    <div className="who-liked">
                        <img src="https://pbs.twimg.com/profile_images/1109389733912666112/XX55fTPf.jpg" />
                        <span className="name">wecode_bootcamp</span> 님 외 n명이 좋아합니다.
                    </div>
                    <FeedsComment />
                </article>
            </div>
        );
    }
}

class StoryContainer extends Component {
    render() {
        return (
            <div className="story-container">
                <div className="story-title">
                    <p className="title-story">스토리</p>
                    <p className="title-see-all">모두보기</p>
                </div>
                <div className="friend">
                    <img src="https://i.pinimg.com/originals/f1/6c/ea/f16ceafdbb590986dd6dc63e8c87cc67.jpg" />
                    <div className="friend-info">
                        <div className="friend-more-info">
                            <p className="friend-name">Welsh Corgi</p>
                            <p className="friend-last-login">10분 전</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

class RecommendContainer extends Component {
    render() {
        return (
            <div className="recommend-container">
                <div className="recommend-title">
                    <p className="recommend-story">회원님을 위한 추천</p>
                    <p className="recommend-see-all">모두보기</p>
                </div>
                <div className="recommend">
                    <img src="https://www.abc.net.au/news/image/10477576-3x2-940x627.jpg" />
                    <div className="recommend-info">
                        <div className="recomment-info-more">
                            <p className="recommend-name">abcde</p>
                            <p className="recommend-follow">ab_님이 팔로우합니다</p>
                        </div>
                    </div>
                    <div>
                        <button className="recommend-button">팔로우</button>
                    </div>
                </div>
            </div>

        );
    }
}

class MainRight extends Component {
    render() {
        return (

            <div className="main-right">
                <div className="mine">
                    <img src="https://pbs.twimg.com/profile_images/1109389733912666112/XX55fTPf.jpg" />
                    <div className="mine-container">
                        <p className="mine-name">wecode_bootcamp</p>
                        <p className="mine-kor-name">WeCode | 위코드</p>
                    </div>
                </div>

                <StoryContainer />
                <RecommendContainer />

                <div className="other">
                    <p className="text">소개·도움말·홍보 센터·API·채용정보·</p>
                    <p className="text">개인정보처리방침·약관·위치·인기 계정·해시태그</p>
                    <p className="text">언어</p>
                    <br />
                    <p>© 2020 WESTAGRAM FROM WECODE</p>
                </div>

            </div>
        );
    }
}

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