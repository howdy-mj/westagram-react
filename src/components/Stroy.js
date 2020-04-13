import React, { Component } from 'react';

class Story extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: [
                {name: 'Welsh Corgi', last_login: '10분 전'},
            ]
        }
    }

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
                            <p className="friend-name">{this.state.friend[0].name}</p>
                            <p className="friend-last-login">{this.state.friend[0].last_login}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Story;