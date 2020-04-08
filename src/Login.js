import React, { Component } from 'react';
import './Login.css';
import logoImg from './img/logo_text.png';

class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="login-container">
                    <div className="login-logo">
                        <img src={logoImg} />
                    </div>
                    <div className="login-input">
                        <input
                            className="id"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input
                            className="pw"
                            type="password"
                            placeholder="비밀번호" />
                        <button className="login-btn">로그인</button>
                    </div>
                    <div className="forgot">
                        <p>비밀번호를 잊으셨나요?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;