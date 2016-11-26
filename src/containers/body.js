/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, TouchableHighlight, Image, ScrollView, } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ToolTip from 'react-native-tooltip';

import {store} from '../store/index.js';
import {deleteTask} from '../actions/actionCreators.js';

var priorIconMap = {
    1: require('../static/images/paperclip1.png'),
    3: require('../static/images/paperclip3.png'),

}
class Body extends Component {
    constructor(props) {
        super(props);
    }
    _deleteTask(taskid){
        store.dispatch(deleteTask(taskid));
    }
    render() {
        console.log('Body:: store.getState() is ', store.getState());
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        let taskArr = store.getState().tasks;
        console.log("Body:: taskArr is  ", taskArr);
        this.state = {
            dataSource: ds.cloneWithRows(taskArr),
        };

        return (
            <View style = {bodyStyle.listWrap}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow}
                          renderSeparator={this._renderSeperator}
                          style={bodyStyle.rowContainer}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        var srcStr = priorIconMap[rowData.priority];
        var stampCount = rowData.timestamp, taskStamp = '';
        for(var i=0; i< stampCount; i++){
            taskStamp += '';
        }

        var subtaskStamp = '';
        if(rowData.subtask && rowData.subtask.length > 0){
            for(let subtaskItem of rowData.subtask){
                for(var k=0; k< subtaskItem.timestamp; k++){
                    subtaskStamp += '';
                }
            }
        }

        return (
            <View style = {bodyStyle.rowWrap} key={rowData.taskid}>
                <ToolTip
                    ref='theToolTip'
                    actions={[
                      {text: '删除', onPress: () => {
                            //console.log('delete is pressed - cur row key is ', rowData.taskid);
                            store.dispatch(deleteTask(rowData.taskid));
                       }},
                    ]}
                    underlayColor='transparent'
                    arrowDirection='right'
                    style = {bodyStyle.tooltip}
                >
                    <Image source = {srcStr} style = {bodyStyle.editIcon}/>
                </ToolTip>
                <View style={bodyStyle.rowCenter}>
                    <Text style={bodyStyle.rowText}>{rowData.desc}</Text>
                </View>
                <View style={bodyStyle.rowRight}>
                    <Text style = {bodyStyle.rowMark}>{taskStamp}</Text>
                </View>
            </View>
        );
    }
    _renderSeperator(sectionID, rowID, adjacentRowHighlighted){
        var subdesc = [];

        //console.log('Body:: _renderSeperator', this);
        let taskArr = this.dataSource._dataBlob.s1;
        if(taskArr[rowID].subtask){
            for(let subitem of taskArr[rowID].subtask){
                var subStampCount = subitem.timestamp, subTaskStamp = '';
                for(var i=0; i< subStampCount; i++){
                    subTaskStamp += '';
                }
                subdesc.push(
                    <View style = {bodyStyle.rowWrap}>
                        <View style={bodyStyle.rowCenter}>
                            <Text style = {bodyStyle.rowText}>{subitem.desc}</Text>
                        </View>
                        <View style={bodyStyle.rowRight}>
                            <Text style = {bodyStyle.rowMark}>{subTaskStamp}</Text>
                        </View>
                    </View>
                );
            }
            var subresult = <View
                key={`${sectionID}-${rowID}`}
                style={{
                  height: adjacentRowHighlighted ? 28 : 84,
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                }}
            >
                <Text style = {bodyStyle.editIcon}></Text>
                <ScrollView>
                    {subdesc}
                </ScrollView>
            </View>
            return subresult;
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
    deleteTaskAction: bindActionCreators(deleteTask, dispatch)
})
//Connects Body to a Redux store.
//params: mapStateToProps, mapDispatchToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);

const bodyStyle = StyleSheet.create({
    listWrap:{
        justifyContent: 'center',
        height: 482,
    },
    rowContainer:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        paddingRight: 2,

    },
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
    editIcon:{
        width: 24,
        height: 22,
        marginTop: 3,
    },
    rowText:{
        lineHeight: 25,
        paddingLeft: 6,
    },
    rowMark:{
        color: 'orange',
    },

});




