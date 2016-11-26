/**
 * Created by qinai on 11/20/16.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {bindActionCreators} from 'redux';

import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';

export default class App extends Component{
    render(){
        return (
            <View style={styleMeet.container}>
                <Header/>
                <Body/>
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
    header: {
        fontSize: 24,
    }
});