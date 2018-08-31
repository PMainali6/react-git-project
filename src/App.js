import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router'

import MainApp from './Router';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} >
                    <MainApp />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;

