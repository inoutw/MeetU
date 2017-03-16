/**
 * Created by qinai on 1/23/17.
 */
import React, {Component, PropTypes} from 'react';
import {ScrollView, ListView, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem.js';

export default class TodoItemList extends Component{
    static propTypes = {
        todoItems: PropTypes.array,
        deleteTodoItem: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.todoItems),
            todoItems: []
        };
    }
    render(){
        const { todoItems, deleteTodoItem } = this.props;
        console.log("TodoItemList::this.props.todoItems is ", todoItems);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(todoItems),
            todoItems: todoItems
        };

        function _renderRow(rowData){
            return (
                <TodoItem key={rowData.todoItemId} todoItem={rowData}  todoAction={deleteTodoItem}/>
            );
        }

        return (
            <ScrollView style={itemListStyle.container}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={_renderRow}
                          style={itemListStyle.rowContainer}
                          enableEmptySections={true}
                />
            </ScrollView>
        );
    }
}

const itemListStyle = StyleSheet.create({
    container:{
        flex: 7,
    },
    rowContainer:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        paddingRight: 2,
    },
});