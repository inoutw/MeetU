/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Header extends Component{
    constructor(){
        super();
        this.weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }
    state = {
        curTime: null,
        curDay: null,
    }
    componentWillMount(){
        setInterval(function(){
            this.setState({
                curDay: this.weekday[new Date().getDay()],
                curTime: new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }
    render(){

        return (
            <View>
                <Text style={headerStyle.marginBottom15}><Ionicons name="ios-alarm" size={20} color="#23034C" /> {this.state.curDay} {this.state.curTime}</Text>
                <View style={headerStyle.dailyDiv}>
                    <Text style={headerStyle.daiyDigest}>Daily Digest:  Time is fliping!</Text>
                </View>
            </View>
        );
    }
}

const headerStyle = StyleSheet.create({
    headerContainer:{

    },
    dailyDiv:{
        marginBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#d9367f',
        paddingBottom: 5,
    },
    daiyDigest:{
        color: '#d9367f',
        fontWeight: 'bold',

    },
    marginBottom15:{
        marginBottom: 15,
        fontWeight: "600",
        color: '#23034C',
    },
});