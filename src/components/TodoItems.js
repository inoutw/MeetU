/**
 * Created by qinai on 1/22/17.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TodoItems extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={todoItemStyles.container}>
                <View style={todoItemStyles.subItems}>
                    <Icon name="circle-thin" size={22} color="#FF4400"></Icon>
                    <TextInput style={todoItemStyles.itemText} value="Couplets"></TextInput>

                </View>
            </View>
        );
    }
}

const todoItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 80,
        paddingLeft: 8,
    },
    subItems: {
        width: 370,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    itemText:{
        paddingLeft: 5,
        height: 20,
        width: 300,
    },
    toCheckCircle:{
        width: 20,
        height: 20,
        backgroundColor: '#FF4400',
        borderRadius: 10,
    }
});