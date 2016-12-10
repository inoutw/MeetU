/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, TouchableHighlight, Image, ScrollView, } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Task from '../components/Task.js';

import {store} from '../store/index.js';
import {deleteTask} from '../actions/actionCreators.js';

class Body extends Component {
    render() {
        console.log('Body:: store.getState() is ', store.getState());
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        let taskArr = store.getState().tasks;
        console.log("Body:: taskArr is  ", taskArr);
        this.state = {
            dataSource: ds.cloneWithRows(taskArr),
        };

        return (
            <ScrollView>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow}
                          renderSeparator={this._renderSeperator}
                          style={bodyStyle.rowContainer}
                />
            </ScrollView>
        );
    }

    _renderRow(rowData) {
        console.log('Body:: rowData is ', rowData);
        return (
            <Task key={rowData.taskid} onClick={()=>{store.dispatch(deleteTask(rowData.taskid))}}
                  taskPrior={rowData.priority} taskDesc={rowData.desc} taskTimeStamp={rowData.timestamp}/>
        );
    }
    _renderSeperator(sectionID, rowID){
        var subdesc = [];
        //console.log('Body:: _renderSeperator', this);
        let taskArr = this.dataSource._dataBlob.s1;
        if(taskArr[rowID].subtask){
            var subCount = taskArr[rowID].subtask.length;
            //console.log('Body:: `${sectionID}-${rowID}` is ', 'subitem'+`:${rowID}_${sectionID}`);
            for(let subitem of taskArr[rowID].subtask){
                subdesc.push(
                    <Task onClick={()=>{}} taskPrior={0} taskDesc={subitem.desc} taskTimeStamp={subitem.timestamp}/>
                )
            }
            return (<View key={`${sectionID}-${rowID}`} >{subdesc}</View>);
        }
        return null;
     }
}

const mapStateToProps = (state) => {
    console.log('Body:: state is', state);
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch) => ({
    //pass action creators down to a component
    taskAction: bindActionCreators(deleteTask, dispatch)
})
//Connects Body to a Redux store.
//params: mapStateToProps, mapDispatchToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);

const bodyStyle = StyleSheet.create({
    rowContainer:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        paddingRight: 2,

    },
});




