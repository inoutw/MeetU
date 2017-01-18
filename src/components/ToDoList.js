/**
 * Created by qinai on 1/17/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ToDoList extends Component{
    render(){
        return (
            <View style={todoStyle.todoContainer}>
                <TouchableHighlight style={todoStyle.todoItem}>
                    <View>
                        <Icon name="shopping-basket" color="pink" size={18}>
                            <Text> Shopping</Text>
                        </Icon>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={todoStyle.todoItem}>
                    <View>
                        <Icon name="film" color="purple" size={18}>
                            <Text> Movie to watch</Text>
                        </Icon>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={todoStyle.todoItem}>
                    <View>
                        <Icon name="book" color="purple" size={18}>
                            <Text> Movie to watch</Text>
                        </Icon>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={todoStyle.todoItem}>
                    <View>
                        <Icon name="film" color="purple" size={18}>
                            <Text> Movie to watch</Text>
                        </Icon>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const todoStyle = StyleSheet.create({
    todoContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 80,
        paddingLeft: 6,
    },
    todoItem:{
        height: 60,
        width: 370,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingTop: 10,
    },
})