import React, { Component } from 'react';

class FeedsComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentValue: '',
            myName: 'wecode_bootcamp',
            comments_id: 2,
            comments: [
                { id: 1, name: 'canon_mj', text: '위워크에서 어쩌구 저쩌구' },
                { id: 2, name: 'neceosecius', text: '빨리 끝내고 싶다ㅏ' },
            ]
        }
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            commentValue: value,
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
        let comments_id = this.state.comments.length;
        // console.log(comments_id);
        comments_id = comments_id + 1;
        let _newComments = Array.from(this.state.comments); // 현재 댓글들
        _newComments.push({id:comments_id, name:myName, text:comment});
        // console.log(_newComments);
        this.setState({
          comments: _newComments,
        })
    }

    deleteComment = (e) => {
        // console.dir(e.target.parentNode.id);
        // debugger;
        let _currentComments = Array.from(this.state.comments);
        // console.log(_currentComments);
        _currentComments = _currentComments.filter( (comments) => {
            return comments.id != e.target.parentNode.id;
        })
        // console.log(_currentComments);

        this.setState({
            comments: _currentComments,
        })
    }

    render() {
        return (
            <div className="comment-container">
                <div className="comment-box">
                    {this.state.comments.map( (comment) => {
                        return (
                            <div className="all-comment" id={comment.id}>
                                <div>
                                    <a>{comment.name}</a>
                                    <span>{comment.text}</span>
                                </div>
                                <button
                                    onClick={this.deleteComment}
                                >삭제</button>
                            </div>);
                    })}
                </div>
                <p className="comment-time">42분 전</p>
                <div className="new-comment">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="댓글 달기..."
                            value={this.state.commentValue}
                            onChange={this.handleChange}
                        />
                    </form>
                    <button onClick={this.handleSubmit}>게시</button>
                </div>
            </div>
        );
    }
}

export default FeedsComment;