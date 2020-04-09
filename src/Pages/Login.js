import React, { Component } from 'react';
import './Login.css';
import LoginInput from './components/LoginInput';
import logoImg from './img/logo_text.png';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div className="login-container">
                    <div className="login-logo">
                        <img src={logoImg} />
                    </div>
                    <LoginInput />
                    <div className="forgot">
                        <p>비밀번호를 잊으셨나요?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;