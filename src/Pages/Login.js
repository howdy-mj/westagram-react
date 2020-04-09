import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';
import logoImg from '../img/logo_text.png';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // isInput: false,
            idValue: '',
            pwValue: '',
        }
        this.handleIDInput = this.handleIDInput.bind(this);
        this.handlePWInput = this.handlePWInput.bind(this);
    }

    handleIDInput(e) {
        this.setState({
            idValue: e.target.value,
        })
    }
    handlePWInput(e) {
        this.setState({
            pwValue: e.target.value,
        })
    }

    goMainPage = () => {
        (this.state.idValue.length > 4 && this.state.pwValue.length > 4) ?
        this.props.history.push('/main') :
        this.props.history.push('./login')
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
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                            value={this.state.idValue}
                            onChange={this.handleIDInput}
                            // isInput={this.state.isInput}
                        />
                        <input
                            className="pw"
                            type="password"
                            placeholder="비밀번호"
                            value={this.state.pwValue}
                            onChange={this.handlePWInput}
                            // isInput={this.state.isInput}
                        />
                        <button
                            className={
                                (this.state.idValue.length > 0 && this.state.pwValue.length > 0) ?
                                    "login-btn activate" : "login-btn"
                            }
                            onClick={this.goMainPage}
                        >로그인</button>
                    </div>

                    <div className="forgot">
                        <p>비밀번호를 잊으셨나요?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);