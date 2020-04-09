import React, { Component } from 'react';

class FeedsComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentValue: ''
        }
    }

    handleCommentInput = (e) => {
        this.setState({
            commentValue: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.commentValue);
        this.writeComment(this.state.commentValue);
        this.setState({
            commentValue: '',
        })
    }

    writeComment = (comment) => {
        const myName = 'wecode_bootcamp';
        console.log(myName, comment);
    }

    render() {
        return (
            <div className="comment-container">
                <div className="comment-box">
                    <p><a>canon_mj</a><span>위워크에서 어쩌구 저쩌구</span></p>
                    <p><a>neceosecius</a><span>빨리 끝내고 싶다ㅏ</span></p>
                    {/* <NewComment /> */}
                </div>
                <p className="comment-time">42분 전</p>
                <div className="new-comment">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="댓글 달기..."
                            value={this.state.commentValue}
                            onChange={this.handleCommentInput}
                        />
                    </form>
                    <button onClick={this.handleSubmit}>게시</button>
                </div>
            </div>
        );
    }
}

export default FeedsComment;