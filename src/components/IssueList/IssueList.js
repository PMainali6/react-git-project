import React, { Component } from 'react';

import './issue-list.css';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
        this.onIssueClick = this.onIssueClick.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    onIssueClick(e) {
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

    handleSort(e) {
        const { newest,oldest, mostCommented, leastComment } = this.props;
        const evt = e.target.value;

        switch(evt) {
            case '1':
                newest();
                break;
            case '2':
                oldest();
                break;
            case '3':
                mostCommented();
                break;
            case '4':
                leastComment();
                break;
        }
    }

    render() {
        const { renderedIssues } = this.props.data;

        return (
            <React.Fragment>
                {renderedIssues.length ? (
                    <div className="issue-list container">
                        <select className="sort-dropdown" onChange={this.handleSort} >
                            <option value="0">Sort</option>
                            <option value="1">Newest</option>
                            <option value="2">Oldest</option>
                            <option value="3">Most Commented</option>
                            <option value="4">Least Commented</option>
                    </select>
            
                        <div className="rendered-issue-list">
                            {renderedIssues.map((issue,i) => {return (
                                <div className="issue" key={i} data-issuenum = {issue.number}
                                data-link={issue.comments_url} onClick={this.onIssueClick}>
                                        <strong className="issue-no">#{issue.number}</strong>

                                        <div className="activity">
                                            <h6 className="issue-title">{issue.title} </h6>
                                            <span className="issue-status">{issue.state}ed on</span>&nbsp;
                                            <span className="open-on">{issue.created_at} by </span>
                                            <span className="creator">{issue.user.login}</span>&nbsp;
                                            <span className="updated-on"> Updated on {issue.updated_at} </span>&nbsp;
                                            <div className="comment-count">{issue.comments} comments</div>
                                        </div>
                                </div>
                            )}) }

                            <div className="action-btn">
                                <button className="prev btn" onClick={this.onPrev}> Prev </button>
                                <button className="next btn" onClick={this.onNext}> Next </button>
                            </div>
                        </div>
                    </div>    
                ) : <div className="loading"> Please show some patience...</div> }
            </React.Fragment> 
        )
    }
}

export default IssueList;