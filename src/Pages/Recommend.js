import React, { Component } from 'react';

class Recommend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recommend: [
                { name: 'abcde', follow: 'ab_님이 팔로우합니다' },
            ]
        }
    }
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
                            <p className="recommend-name">{this.state.recommend[0].name}</p>
                            <p className="recommend-follow">{this.state.recommend[0].follow}</p>
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

export default Recommend;