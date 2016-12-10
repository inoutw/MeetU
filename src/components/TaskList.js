/**
 * Created by qinai on 12/8/16.
 */
import React from 'react';
import {ScrollView, ListView, StyleSheet, View} from 'react-native';
import Task from './Task.js';

const TaskList = ({tasks, taskAction}) => {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows(tasks),
    };
    this._renderRow = (rowData) => {
        return (
            <Task key={rowData.taskid}
                  onClick={() => taskAction(rowData.taskid)}
                  taskPrior={rowData.priority}
                  taskDesc={rowData.desc}
                  taskTimeStamp={rowData.timestamp}/>
        );
    }
    this._renderSeperator = (sectionID, rowID) => {
        var subdesc = [];
        if(tasks[rowID].subtask){
            for(let subitem of tasks[rowID].subtask){
                subdesc.push(
                    <Task key={subitem.desc}
                          taskPrior={0}
                          taskDesc={subitem.desc}
                          taskTimeStamp={subitem.timestamp}/>
                )
            }
            return (<View key={`${sectionID}-${rowID}`} >{subdesc}</View>);
        }
        return null;
    }
    return (
        <ScrollView>
            <ListView dataSource={this.state.dataSource}
                      renderRow={this._renderRow}
                      renderSeparator={this._renderSeperator}
                      style={taskListStyle.rowContainer}
            />
        </ScrollView>
    );
}

export default TaskList;

const taskListStyle = StyleSheet.create({
    rowContainer:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        paddingRight: 2,
    },
});



