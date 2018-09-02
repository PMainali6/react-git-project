import React, { Component } from 'react';
import './issue-list.css';


class IssueList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { fetchComment, history } = this.props;
        const { user, repo } = this.props.data;

        let div = e.currentTarget;
        let url = div.dataset.link;
        let issuenum = div.dataset.issuenum;

        fetchComment(url);
        history.push(`/${user}/${repo}/issues/${issuenum}`);
    }

    render() {
        const { issues } = this.props.data;
    
        return (
            <div className="issue-list container">
                {issues.map((issue,i) => {return (
                    <div className="issue" key={i} data-issuenum = {issue.number}
                        data-link={issue.comments_url} onClick={this.handleClick}>
                            <strong className="issue-no">#{issue.number}</strong>

                            <div className="activity">
                                <h6 className="issue-title">{issue.title} </h6>
                                <span className="issue-status">{issue.state}ed on</span>&nbsp;
                                <span className="open-on">{issue.created_at} by </span>
                                <span className="creator">{issue.user.login}</span>&nbsp;
                                <span className="updated-on"> Updated on {issue.updated_at} </span>&nbsp;
                            </div>
                    </div>
                )}) }
            </div>
        )
    }
}

export default IssueList;