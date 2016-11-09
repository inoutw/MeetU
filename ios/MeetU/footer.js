/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, Modal} from 'react-native';


var textItems = {};
export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: true,
            task:[],
        };
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _updateText(text, index){
        textItems[index] = text;
    }

    _addTask(){
        this.state.task.push({
            "priority": 1,
            "desc": textItems['taskDesc'],
            "timestamp": 5,
            "subtask":[{
                "desc": textItems['subtaskDesc1'],
                "timestamp": 2
            }, {
                "desc": textItems['subtaskDesc2'],
                "timestamp": 2
            }, {
                "desc": textItems['subtaskDesc3'],
                "timestamp": 1
            }]
        });
        console.log('added task is ',this.state.task);
        this._setModalVisible(false);
    }

    render(){
        var modalBg = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerModalBg = this.state.transparent ? { backgroundColor: '#fff', padding: 20 } : null;
        return (
            <View>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}>
                    <View style={[footerStyle.modalContainer, modalBg]}>
                        <View style={[footerStyle.modalView, innerModalBg]}>
                            <View style = {footerStyle.addTaskWrap}>
                                <Text style = {footerStyle.labelLeft}>Task: </Text>
                                <View style = {footerStyle.inputTaskLabelWrap}>
                                    <TextInput
                                        multiline={true}
                                        style={footerStyle.inputTask}
                                        onEndEditing={(event)=>{this._updateText(event.nativeEvent.text, 'taskDesc')}}
                                    />
                                    <Text style={footerStyle.labelTaskTime}> x5</Text>
                                </View>
                            </View>
                            <View style = {footerStyle.subTaskWrap}>
                                <Text style = {footerStyle.labelLeft}>Taskslice: </Text>
                                <View style = {footerStyle.subInputWrap}>
                                    <View style={footerStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={footerStyle.inputSubTask}
                                            onEndEditing = {(event)=>this._updateText(event.nativeEvent.text, 'subtaskDesc1')}
                                        />
                                        <Text> x2</Text>
                                    </View>
                                    <View style={footerStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={footerStyle.inputSubTask}
                                            onEndEditing = {(event)=>this._updateText(event.nativeEvent.text, 'subtaskDesc2')}
                                        />
                                        <Text> x2</Text>
                                    </View>
                                    <View style={footerStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={footerStyle.inputSubTask}
                                            onEndEditing = {(event)=>this._updateText(event.nativeEvent.text, 'subtaskDesc3')}
                                        />
                                        <Text> x1</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {footerStyle.labelPriorityWrap}>
                                <Text style = {footerStyle.labelLeft}>重要程度:</Text>
                                <View style = {footerStyle.colorLabelWrap}>
                                    <TouchableHighlight style = {footerStyle.labelPriorPress}>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP1]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style = {footerStyle.labelPriorPress} >
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP2]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style = {footerStyle.labelPriorPress}>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP3]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style = {footerStyle.labelPriorPress}>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP4]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style = {footerStyle.labelPriorPress}>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP5]}></View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style = {footerStyle.modalBtnWrap}>
                                <TouchableHighlight onPress={this._setModalVisible.bind(this,false)}
                                                    style = {footerStyle.btnCancel}>
                                    <Text>取消</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style = {footerStyle.btnSave} onPress = {()=>{this._addTask(); this._setModalVisible.bind(this, false)}}>
                                    <Text style = {footerStyle.textSave}>保存</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style  = {footerStyle.footerBtnWrap}>
                    <TouchableHighlight style = {footerStyle.footerBtn} onPress={this._setModalVisible.bind(this, true)}>
                        <Text style = {footerStyle.footerText}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const footerStyle = StyleSheet.create({
    //add btn at first screen
    footerBtnWrap:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerBtn:{
        width: 60,
        height: 30,
        backgroundColor: '#D00000',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    footerText:{
        color: 'white',
        fontSize: 32,
        fontWeight: '300',
        lineHeight: 28,
    },

    //add task view modal
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        alignItems: 'flex-start',
    },
    addTaskWrap:{
        flexDirection: 'row',
    },
    labelLeft:{
        flex: 1,
    },
    inputTask:{
        height: 56,
        borderWidth: 0.5,
        borderColor: '#aaa',
        flex: 1,
        fontSize: 13,
        padding: 4,
        marginRight: 3,
    },
    subTaskWrap:{
        flexDirection: 'row',
        marginTop: 12,
    },
    inputTaskLabelWrap:{
        flexDirection: 'row',
        flex: 4,
    },
    inputSubTaskLabelWrap:{
        flexDirection: 'row',
    },
    subInputWrap:{
        flex: 4,
    },
    inputSubTask:{
        height: 26,
        borderWidth: 0.5,
        borderColor: '#aaa',
        fontSize: 13,
        padding: 4,
        marginBottom: 8,
        flex: 1,
        marginRight: 3,
    },
    labelPriorityWrap:{
        marginTop: 8,
        flexDirection: 'row',
    },
    colorLabelWrap:{
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 20,
    },
    labelPriority:{
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    colorP1:{
        backgroundColor: '#ff0000',
    },
    colorP2:{
        backgroundColor: 'orange',
    },
    colorP3:{
        backgroundColor: '#0000ff',
    },
    colorP4:{
        backgroundColor: 'green',
    },
    colorP5:{
        backgroundColor: 'purple',
    },
    modalBtnWrap:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnCancel: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#aaa',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    btnSave:{
        borderRadius: 5,
        backgroundColor: '#ff0000',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        flex:1,
    },
    textSave: {
        color: '#fff',
    },
    labelPriorPress:{
        padding: 2,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        marginTop: -3,
    },

});
