/**
 * Created by qinai on 12/17/16.
 */

import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, Modal, AsyncStorage,KeyboardAvoidingView} from 'react-native';

import ColorDots from './ColorDots.js';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: true,
            priorVal: 5,
        };

    }
    static propTypes = {
        tasks: PropTypes.array,
        taskAction: PropTypes.func.isRequired,
    }
    static get defaultProps(){

    }
    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _getSubtask(targetObj, descInput, timeInput){
        var subItem = {};
        if(descInput){
            console.log('TaskForm:descInput is ', descInput);
            subItem = {
                'desc': descInput,
                'timestamp': timeInput
            }
            targetObj['subtask'].push(subItem);
        }
        return targetObj;
    }

    _addTask() {
        console.log("TaskForm:: this.props.tasks is ", this.props.tasks);
        var newTask={}, taskidArr = [];
        if(this.props.tasks && this.props.tasks.length > 0){
            for (item of this.props.tasks) {
                taskidArr.push(item.taskid);
            }
        }
        console.log('TaskForm:: taskid is ', taskidArr);
        var maxTaskid = taskidArr.length > 0 ? Math.max(...taskidArr): 0;
        newTask['taskid'] = maxTaskid + 1;
        newTask['priority'] = this.state.priorVal;
        newTask['desc'] = this.refs.taskDesc._lastNativeText;
        newTask['timestamp'] = 5;
        newTask['subtask'] = [];
        this._getSubtask(newTask, this.refs.subtaskDesc1._lastNativeText, 2);
        this._getSubtask(newTask, this.refs.subtaskDesc2._lastNativeText, 2);
        this._getSubtask(newTask, this.refs.subtaskDesc3._lastNativeText, 1);
        console.log("TaskForm:: new task to add is ", newTask);
        this.props.taskAction(newTask);

        this._setModalVisible(false);
    }

    _selectPrior(priorIndex){
        //setState is asynchronous here, so trying to work with state directly if setState call won't work as the update
        //won't necessarily run. Instead you can use the second argument to setState which is a callback:
        this.setState({priorVal: priorIndex+1}, function(){
            console.log('TaskForm:: this.state is ', this.state);
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}>
                    <KeyboardAvoidingView  behavior='padding' style={formStyle.modalContainer}>
                        <View style={formStyle.modalView}>
                            <View style={formStyle.addTaskWrap}>
                                <Text style={formStyle.labelLeft}>Task: </Text>
                                <View style={formStyle.inputTaskLabelWrap}>
                                    <TextInput
                                        multiline={true}
                                        style={formStyle.inputTask}
                                        ref='taskDesc'
                                    />
                                    <Text style={formStyle.labelTaskTime}> x5</Text>
                                </View>
                            </View>
                            <View style={formStyle.subTaskWrap}>
                                <Text style={formStyle.labelLeft}>Taskslice: </Text>
                                <View style={formStyle.subInputWrap}>
                                    <View style={formStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={formStyle.inputSubTask}
                                            ref='subtaskDesc1'
                                        />
                                        <Text> x2</Text>
                                    </View>
                                    <View style={formStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={formStyle.inputSubTask}
                                            ref='subtaskDesc2'
                                        />
                                        <Text> x2</Text>
                                    </View>
                                    <View style={formStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={formStyle.inputSubTask}
                                            ref='subtaskDesc3'
                                        />
                                        <Text> x1</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={formStyle.labelPriorityWrap}>
                                <Text style={formStyle.labelLeft}>重要程度:</Text>
                                <View style={formStyle.colorLabelWrap}>
                                    <ColorDots options={['#f00', 'orange', '#00f', 'green', 'purple']}
                                               onSelect={this._selectPrior.bind(this)}/>
                                </View>
                            </View>
                            <View style={formStyle.modalBtnWrap}>
                                <TouchableHighlight onPress={this._setModalVisible.bind(this,false)}
                                                    style={formStyle.btnCancel}>
                                    <Text>取消</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={formStyle.btnSave}
                                                    onPress={()=>{this._addTask(); this._setModalVisible.bind(this, false)}}>
                                    <Text style={formStyle.textSave}>保存</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
                <View style={formStyle.BottomBtnWrap}>
                    <TouchableHighlight style={formStyle.bottomBtn} onPress={this._setModalVisible.bind(this, true)}>
                        <Text style={formStyle.addText}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
export default TaskForm;

const formStyle = StyleSheet.create({
    //add btn at first screen
    BottomBtnWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottomBtn: {
        width: 60,
        height: 30,
        backgroundColor: '#EA4335',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    addText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '300',
        lineHeight: 28,
    },

    //add task view modal
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: '#fff',
    },
    addTaskWrap: {
        flexDirection: 'row',
    },
    labelLeft: {
        flex: 1,
    },
    inputTask: {
        height: 56,
        borderWidth: 0.5,
        borderColor: '#aaa',
        flex: 1,
        fontSize: 13,
        padding: 4,
        marginRight: 3,
    },
    subTaskWrap: {
        flexDirection: 'row',
        marginTop: 12,
    },
    inputTaskLabelWrap: {
        flexDirection: 'row',
        flex: 4,
    },
    inputSubTaskLabelWrap: {
        flexDirection: 'row',
    },
    subInputWrap: {
        flex: 4,
    },
    inputSubTask: {
        height: 26,
        borderWidth: 0.5,
        borderColor: '#aaa',
        fontSize: 13,
        padding: 4,
        marginBottom: 8,
        flex: 1,
        marginRight: 3,
    },
    labelPriorityWrap: {
        marginTop: 8,
        flexDirection: 'row',
    },
    colorLabelWrap: {
        flex: 4,
        marginRight: 20,
    },
    modalBtnWrap: {
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
        flex: 1,
    },
    btnSave: {
        borderRadius: 5,
        backgroundColor: '#ff0000',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        flex: 1,
    },
    textSave: {
        color: '#fff',
    },
    labelPriorPress: {
        padding: 2,
        borderWidth: 1,
        borderColor: '#f00',
        borderRadius: 15,
        marginTop: -3,
    },

});
