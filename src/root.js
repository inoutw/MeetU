/**
 * Created by qinai on 11/20/16.
 */
import React, {Component} from 'react';
import {View} from 'react-native';

import App from './components/app.js';
import TabBar from './components/TabBar.js';
import  {store} from './store/index.js';
import {Provider} from 'react-redux';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

