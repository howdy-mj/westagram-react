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

    changeColor() {
        this.state.idValue.length > 0 && this.state.pwValue.length > 0 ?
            console.log('1이상') :
            console.log('비어있음');
    }

    render() {
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
                    className="login-btn"
                >로그인</button>
                {/* {this.changeColor()}; */}
            </div>
        );
    }
}

export default LoginInput;