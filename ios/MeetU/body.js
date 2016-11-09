/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, TouchableHighlight, Image, ScrollView, } from 'react-native';

import ToolTip from 'react-native-tooltip';
import Footer from './footer';

var taskArr = {
    "task": [{
        "priority": 1,
        "desc": "Content change",
        "timestamp": 5,
        "subtask": [{
            "desc": "content code",
            "timestamp": 2
        }, {
            "desc": "merge content",
            "timestamp": 2
        }, {
            "desc": "test content",
            "timestamp": 1
        }]
    },
    {
        "priority": 1,
        "desc": "GTM Change",
        "timestamp": 5,
        "subtask": [{
            "desc": "GTM code",
            "timestamp": 2
        }, {
            "desc": "merge GTM",
            "timestamp": 2
        }, {
            "desc": "test GTM",
            "timestamp": 1
        }]
    },
    {
        "priority": 3,
        "desc": "Email change",
        "timestamp": 4,
    }]
};
var priorIconMap = {
    1: require('./Images.xcassets/paperclip1.png'),
    3: require('./Images.xcassets/paperclip3.png'),

}
export default class Body extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        console.log('footer data is ', Footer);
        this.state = {
            dataSource: ds.cloneWithRows(taskArr.task),
        };
    }
    render() {
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
            <View style = {bodyStyle.rowWrap}>
                <ToolTip
                    ref='theToolTip'
                    actions={[
                      {text: '删除', onPress: () => { console.log('delete is pressed') }},
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

        if(taskArr.task[rowID].subtask){
            for(let subitem of taskArr.task[rowID].subtask){
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




