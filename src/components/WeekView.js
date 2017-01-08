/**
 * Created by qinai on 12/27/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class WeekView extends Component{
    render(){
        return (
            <View style={weekStyle.weekContainer}>
                <Text style={weekStyle.textStyle}>this is week view</Text>
            </View>
        )
    }
}
const weekStyle = StyleSheet.create({
    weekContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})