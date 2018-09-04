import React, { Component } from 'react';
import './single-issue.css';

class SingleIssue extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = this.refs.comment.value;
        alert(comment);
        this.refs.commentForm.reset();
      }

    render() {
        const { comments, issues } = this.props.data;
        const { location } = this.props;
        const index = location.pathname.split('/')[5];
    
        const issue = issues.find(issue => {
            return issue.number == index;
        });

        return (
            <div className="single-issue-container container">
                 <div className="single-issue-description">
                        <h3 className="issue-no">#{issue.number}</h3>
                    
                        <div className="activity">
                            <h3 className="issue-title">{issue.title}</h3>
                            <span className="issue-status btn-custom">{issue.state}</span>&nbsp;&nbsp;
                            <span className="open-on">{issue.created_at} by </span>
                            <span className="creator">{issue.user && issue.user.login}</span>&nbsp;
                        </div>
                    
                        <div className="issue-description">
                            {issue.body}
                        </div>
                    </div>

                    <h3 className="comment-title">Comments</h3>

                    {comments.map((comment, i) => (
                            <div className="comment" key={i}>
                                <div className="avatar"><img src={comment.user.avatar_url} alt={comment.user.login}/></div>
                                <div className="creator-name">{comment.user.login}</div>
                                <div className="comment-body">{comment.body}</div>
                            </div>
                    ))}

                    <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                        <textarea rows="4" ref="comment" className="textbox"></textarea>
                        <input type="submit" value="Comment" className="btn-success"/>
                    </form>
            </div>
            
        )
    }
}

export default SingleIssue;

