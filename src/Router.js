import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

import * as actions from "./actions";


class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" render = {(props) => <HomePage {...this.props}/> } />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    repoList: state.repoList
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Router);




export default withRouter(MainApp);
