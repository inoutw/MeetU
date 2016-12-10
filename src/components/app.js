/**
 * Created by qinai on 11/20/16.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {bindActionCreators} from 'redux';

import Header from './header.js';
import TaskListContainer from '../containers/TaskListContianer.js';
import Footer from '../containers/footer.js';

export default class App extends Component{
    render(){
        return (
            <View style={styleMeet.container}>
                <Header/>
                <TaskListContainer/>
                <Footer/>
            </View>
        );
    }
}

const styleMeet = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
});