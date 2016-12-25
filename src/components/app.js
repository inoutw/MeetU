/**
 * Created by qinai on 11/20/16.
 */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './header.js';
import TaskListContainer from '../containers/TaskListContianer.js';
import TaskFormContainer from '../containers/TaskFormContainer.js';
import Funs from './Funs.js';

export default class App extends Component{
    render(){
        return (
            <View style={[styleMeet.container]}>
                <Header/>
                <TaskListContainer/>
                <Funs/>
                <TaskFormContainer/>
            </View>
        );
    }
}

const styleMeet = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});