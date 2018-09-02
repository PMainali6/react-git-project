import React, {Component} from "react";
import UserRepoList from '../UserRepoList/UserRepoList';
import './homepage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const { fetchUser, setUsername } = this.props;

        e.preventDefault();
        const username = this.refs.username.value;
        this.refs.usernameForm.reset();

        setUsername(username);
        fetchUser(username);
    }
    render() {
        return (
            <div className="container form-container">
                <form ref="usernameForm" className="username-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="username" placeholder="Enter the GitHub username" />
                    <input type="submit" className="submit" value="Let's Go!"/>
                </form>
    
                {(this.props.data.repoList.length > 0) ? (<UserRepoList {...this.props} />) : ''}

            </div>
        )
    }
}

export default HomePage;
