/**
 * Created by qinai on 1/23/17.
 */
import React, {PropTypes} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({ todoItem, todoAction, itemColor })=>{
    return (
        <View style={todoItemStyles.container}>
            <View style={todoItemStyles.subItems}>
                <Icon name="circle-thin" size={22} color={itemColor} />
                <TextInput style={todoItemStyles.itemText} defaultValue={todoItem.desc}/>
            </View>
        </View>
    );
}
export default TodoItem;

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
        height: 30,
        width: 300,
    }
});