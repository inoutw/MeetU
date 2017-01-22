/**
 * Created by qinai on 12/27/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class YearView extends Component{
    render(){
        return (
            <View style={yearStyle.yearContainer}>
                <Text>this is me!</Text>
            </View>
        )
    }
}

const yearStyle = StyleSheet.create({
    yearContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})