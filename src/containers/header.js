/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, } from 'react-native';

export default class Header extends Component{
    render(){
        return (
            <View>
                <Text style={headerStyle.marginBottom15}>Date:</Text>
                <Text style={headerStyle.marginBottom10}>My Story:</Text>
                <TextInput placeholder="enter your story"
                           multiline={true}
                           style={[headerStyle.inputStory, headerStyle.marginBottom10]}/>
            </View>
        );
    }
}

const headerStyle = StyleSheet.create({
    headerContainer:{

    },
    marginBottom10:{
        marginBottom: 10,
    },
    marginBottom15:{
        marginBottom: 15,
    },
    inputStory:{
        height: 56,
        borderWidth: 0.5,
        borderColor: '#aaa',
        flex: 0.8,
        fontSize: 13,
        padding: 4,
    }
});