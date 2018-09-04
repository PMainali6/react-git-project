import React, {Component} from "react";
import './user-repo-list.css';
import { fetchIssues } from "../../actions";

class UserRepoList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { setRepoName, fetchIssues, history } = this.props;
        const { user } = this.props.data;

       let div = e.currentTarget;
       let link = div.dataset.link;
       let repo = div.dataset.repo;
    
       setRepoName(repo);
       fetchIssues(link);
    
       history.push(`/${user}/${repo}/issues`);
    }

    render() {
        const { repoList, user } = this.props.data;
        return (
            <React.Fragment>
                <h3 className="container">List of {user} repositories</h3>
                <div className="user-repo-list container" >
                    {repoList.map((repo,i) => (
                        <div className="repo-name" key={i} data-repo={repo.name}
                            data-link={`${repo.url}/issues`} onClick={this.handleClick}>
                            {repo.name}
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default UserRepoList;