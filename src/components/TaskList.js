/**
 * Created by qinai on 12/8/16.
 */
import React, {Component, PropTypes} from 'react';
import {ScrollView, ListView, StyleSheet, View} from 'react-native';
import Task from './Task.js';
import {fetchTasksIfNeeded} from '../actions/actionCreators.js';
//v0:
// class TaskList extends Component{
//     static propTypes = {
//         tasks: PropTypes.array,
//         dispatch: PropTypes.func.isRequired
//     }
//     constructor(props) {
//         super(props);
//         var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
//         this.state = {
//             dataSource: ds.cloneWithRows(this.props.tasks),
//             tasks: []
//         };
//     }
//     componentWillMount() {
//         console.log("TaskList::this.props is ", this.props);
//         // Injected by react-redux:
//         const { dispatch} = this.props
//         dispatch(fetchTasksIfNeeded());
//     }
//
//
//     render(){
//
//         const { tasks, dispatch } = this.props;
//         console.log("TaskList::this.props.tasks is ", tasks);
//         var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
//         this.state = {
//             dataSource: ds.cloneWithRows(tasks),
//             tasks: tasks
//         };
//
//         function _renderRow(rowData){
//             return (
//                 <Task key={rowData.taskid} task={rowData} taskAction={dispatch}/>
//             );
//         }
//         function _renderSeperator(sectionID, rowID){
//             var subdesc = [];
//             if(tasks[rowID].subtask){
//                 for(let subitem of tasks[rowID].subtask){
//                     subdesc.push(
//                         <Task key={subitem.desc} task={subitem}/>
//                     )
//                 }
//                 return (<View key={`${sectionID}-${rowID}`} >{subdesc}</View>);
//             }
//             return null;
//         }
//
//
//         return (
//             <ScrollView>
//                 <ListView dataSource={this.state.dataSource}
//                           renderRow={_renderRow}
//                           renderSeparator={_renderSeperator}
//                           style={taskListStyle.rowContainer}
//                           enableEmptySections={true}
//                 />
//             </ScrollView>
//         );
//     }
// }
//
// export default TaskList;

//v1: extract as presentational component
const TaskList = ({tasks, deleteTask}) => {
    console.log("deleteTask is ", deleteTask);
    console.log("TaskList::tasks is ", tasks);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows(tasks),
    };
    this._renderRow = (rowData) => {
        return (
            <Task key={rowData.taskid} task={rowData} taskAction={deleteTask}/>
        );
    }
    this._renderSeperator = (sectionID, rowID) => {
        var subdesc = [];
        if(tasks[rowID] && tasks[rowID].subtask && tasks[rowID].subtask.length > 0){
            for(let subitem of tasks[rowID].subtask){
                subdesc.push(
                    <Task key={subitem.desc} task={subitem}/>
                )
            }
            return (<View key={`${sectionID}-${rowID}`} >{subdesc}</View>);
        }
        return null;
    }
    return (
        <ScrollView style={{flex:6}}>
            <ListView dataSource={this.state.dataSource}
                      renderRow={this._renderRow}
                      renderSeparator={this._renderSeperator}
                      style={taskListStyle.rowContainer}
                      enableEmptySections={true}
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



