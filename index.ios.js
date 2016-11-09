/**
* created by AiQingmin 2016.8.7 @GC Center
* React Native App - MeetU
*/
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import Header from './ios/MeetU/header.js';
import Body from './ios/MeetU/body.js';
import Footer from './ios/MeetU/footer.js';


class MeetU extends Component {
    render() {
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
    container:{
        paddingTop:30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    header:{
        fontSize: 24,

    }
});

AppRegistry.registerComponent('MeetU', ()=> MeetU);


