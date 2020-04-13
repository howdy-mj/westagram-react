import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import logoImg from '../../img/logo_text.png';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idValue: '',
            pwValue: '',
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        this.setState({
            [name]: value, // 계산된 속성명
        })
        // console.log(e.target.name);
    }

    goMainPage = () => {
        (this.state.idValue.length > 4 && this.state.pwValue.length > 4) ?
        this.props.history.push('/main') :
        alert('아이디와 비밀번호 모두 5자리 이상 적어주세요');
        this.setState({
            idValue: '',
            pwValue: '',
        })
    }

    render() {
        const {idValue, pwValue} = this.state; // 비구조화 할당

        return (
            <div className="Login">
                <div className="login-container">
                    <div className="login-logo">
                        <img src={logoImg} />
                    </div>

                    <div className="login-input">
                        <input
                            className="id"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                            value={idValue}
                            onChange={this.handleChange}
                            name="idValue"
                        />
                        <input
                            className="pw"
                            type="password"
                            placeholder="비밀번호"
                            value={pwValue}
                            onChange={this.handleChange}
                            name="pwValue"
                        />
                        <button
                            className={
                                (idValue.length > 0 && pwValue.length > 0) ?
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