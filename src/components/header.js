/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, } from 'react-native';

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
    _setCurTime(){
        this.setState({
            curDay: this.weekday[new Date().getDay()],
            curTime: new Date().toLocaleString()
        })
    }
    componentWillMount(){
        this._setCurTime();
        setInterval(function(){
            this._setCurTime();
        }.bind(this), 1000);
    }
    render(){
        return (
            <View>
                <View style={headerStyle.topHeader}>
                    <Text style={headerStyle.headerTime}><Ionicons name="ios-clock-outline" size={20} color="#eee" /> {this.state.curDay} {this.state.curTime}</Text>
                </View>
                <View style={headerStyle.dailyDiv}>
                    <Text style={headerStyle.daiyDigest}><Ionicons name="ios-book-outline" size={20} color="#bbb" /> Time is fliping!</Text>
                </View>
            </View>
        );
    }
}

const headerStyle = StyleSheet.create({
    topHeader:{
        marginBottom: 1,
        
    },
    headerTime:{
        fontWeight: "600",
        color: '#fff',
        textAlign: 'center',
        lineHeight: 24,
    },
    dailyDiv:{
        paddingTop: 5,
        backgroundColor: '#fff',
    },
    daiyDigest:{
        color: '#bbb',
        fontWeight: 'bold',
        textAlign: 'center',

    },

});