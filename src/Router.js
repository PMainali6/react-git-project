import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import IssueList from './components/IssueList/IssueList';
import SingleIssue from './components/SingleIssue/SingleIssue';

import * as actions from "./actions";


class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/react-git-project" render = {(props) => <HomePage {...this.props}/> } />
                    <Route exact path="/react-git-project/:user/:repo/issues" render = {(props) => <IssueList {...this.props}/>} />
                    <Route exact path="/react-git-project/:user/:repo/issues/:issueId" render = {(props) => <SingleIssue {...this.props} />} />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Router);




export default withRouter(MainApp);
