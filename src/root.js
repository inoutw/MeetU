/**
 * Created by qinai on 11/20/16.
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './containers/app.js';
import  {store} from './store/index.js';
import {Provider} from 'react-redux';

export default class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

