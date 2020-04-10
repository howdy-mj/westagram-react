import React, { Component } from 'react';
import Story from './Stroy';
import Recommend from './Recommend';

class MainRight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myInfo: { name: 'wecode_bootcamp', korName: 'WeCode | 위코드' },
        }
    }
    render() {
        return (

            <div className="main-right">
                <div className="mine">
                    <img src="https://pbs.twimg.com/profile_images/1109389733912666112/XX55fTPf.jpg" />
                    <div className="mine-container">
                        <p className="mine-name">{this.state.myInfo.name}</p>
                        <p className="mine-kor-name">{this.state.myInfo.korName}</p>
                    </div>
                </div>

                <Story />
                <Recommend />

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

export default MainRight;