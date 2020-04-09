import React, { Component } from 'react';

class LoginInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        console.log('rendered');
        return (
            <div className="login-input">
                <input
                    className="id"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    value={this.state.idValue}
                    onChange={this.handleIDInput}
                />
                <input
                    className="pw"
                    type="password"
                    placeholder="비밀번호"
                    value={this.state.pwValue}
                    onChange={this.handlePWInput}
                />
                <button 
                    className={
                        (this.state.idValue.length > 0 && this.state.pwValue.length > 0) ?
                        "login-btn activate" : "login-btn"
                    }
                >로그인</button>
            </div>
        );
    }
}

export default LoginInput;