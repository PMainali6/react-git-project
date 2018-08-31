import React, {Component} from "react";
//import UserRepoList from '../UserRepoList/UserRepoList';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const { fetchUser } = this.props;

        e.preventDefault();
        const username = this.refs.username.value;
        this.refs.usernameForm.reset();
        fetchUser(username);
    }
    render() {
        return (
            <div className="form-container">
                <form ref="usernameForm" className="username-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="username" placeholder="Enter the GitHub username" />
                    <input type="submit" className="submit" value="Let's Go!"/>
                </form>
                
                {/* {this.props.repoList ? (<UserRepoList repoList = {this.props.repoList} />) : ''} */}

            </div>
        )
    }
}

export default HomePage;
