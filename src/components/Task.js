/**
 * Created by qinai on 12/8/16.
 */
import React, {PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TaskToolTip from './TaskToolTip.js';

const Task = ({ onClick, taskPrior, taskDesc, taskTimeStamp })=>{
    var taskSymbalStamp = '';
    for(var i=0; i< taskTimeStamp; i++){
        taskSymbalStamp += '';
    }
    return (
        <View style = {taskStyle.rowWrap}>
            <TaskToolTip
                onToolTipPress = {()=>onClick}
                priorityNum = {taskPrior}
            />
            <View style={taskStyle.rowCenter}>
                <Text style={taskStyle.rowText}>{taskDesc}</Text>
            </View>
            <View style={taskStyle.rowRight}>
                <Text style = {taskStyle.rowMark}>{taskSymbalStamp}</Text>
            </View>
        </View>
    )
}
export default Task;

const taskStyle = StyleSheet.create({
    rowWrap:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rowCenter:{
        height: 28,
        flex: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
    },
    rowRight:{
        flex: 2,
    },
    rowText:{
        lineHeight: 25,
        paddingLeft: 6,
    },
    rowMark:{
        color: 'orange',
    },

})

