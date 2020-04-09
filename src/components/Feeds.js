import React, { Component } from 'react';
import FeedsComment from './FeedsComment';

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
                        <div className="emo-left">
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

export default Feeds;