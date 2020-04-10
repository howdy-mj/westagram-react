import React, { Component } from 'react';
// import NewComment from './Newcomment';

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
        console.log(myName, comment);

        this.setState({
            
        })

    }

    deleteComment = (e) => {
        console.dir(e.target.parentNode);

        // this.state.comments.filter( (str) => {
        //     return str
        // })
    }

    render() {
        return (
            <div className="comment-container">
                <div className="comment-box">
                    {this.state.comments.map( (comment, i) => {
                        return (
                            <div className="all-comment">
                                <div id={i}>
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