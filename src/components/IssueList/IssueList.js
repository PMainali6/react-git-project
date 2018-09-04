import React, { Component } from 'react';
import './issue-list.css';


class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
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

    onPrev(e) {
        const { btn } = this.props;
        let newPage = this.state.page - 1;

        if(newPage < 0 ) { newPage = 0 }
        this.setState({ page: newPage });
        btn(newPage);
    }

    onNext(e) {
        const { btn, data } = this.props;

        let totalPages = parseInt(data.issues.length/10) - 1;
        if(data.issues.length % 10) { totalPages = totalPages + 1 }

        let  newPage = this.state.page + 1;
        if(newPage > totalPages) { newPage = totalPages }

        this.setState({ page: newPage });
        btn(newPage);
    }

    render() {
        const { renderedIssues } = this.props.data;
    
        return (
            <div className="issue-list container">
                {renderedIssues.map((issue,i) => {return (
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

                <div className="action-btn">
                    <button className="prev btn" onClick={this.onPrev}> Prev </button>
                    <button className="next btn" onClick={this.onNext}> Next </button>
                </div>
            </div>
        )
    }
}

export default IssueList;