import React, { Component } from 'react';

class FeedsComment extends Component {
    render() {
        return (
            <div className="comment-container">
                <div className="comment-box">
                        <p><a>canon_mj</a><span>위워크에서 어쩌구 저쩌구</span></p>
                        <p><a>neceosecius</a><span>빨리 끝내고 싶다ㅏ</span></p>
                    </div>
                    <p className="comment-time">42분 전</p>
                    <div className="new-comment">
                        <input type="text" placeholder="댓글 달기..." />
                        <button>게시</button>
                    </div>
            </div>
        );
    }
}

export default FeedsComment;