/**
 * Created by qinai on 12/17/16.
 */

import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, Modal} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {store} from '../store/index.js';

import {addTask} from '../actions/actionCreators.js';

import ColorDots from './ColorDots.js';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: true,
        };
    }
    static propTypes = {
        taskAction: PropTypes.func,
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
        var newTask={}, taskidArr = [];
        for (item of store.getState().tasks) {
            taskidArr.push(item.taskid);
        }
        var maxTaskid = Math.max(...taskidArr);
        newTask['taskid'] = maxTaskid + 1;
        newTask['priority'] = this.state.priorityValue;
        newTask['desc'] = this.refs.taskDesc._lastNativeText;
        newTask['timestamp'] = 5;
        newTask['subtask'] = [];
        this._getSubtask(newTask, this.refs.subtaskDesc1._lastNativeText, 2);
        this._getSubtask(newTask, this.refs.subtaskDesc2._lastNativeText, 2);
        this._getSubtask(newTask, this.refs.subtaskDesc3._lastNativeText, 1);

        store.dispatch(addTask(newTask));
        this._setModalVisible(false);
    }

    _selectPrior(priorOption, priorVal) {
        console.log('TaskForm:: selectedIndex is ', priorVal);
        this.setState({
            priorVal,
        });
        console.log('TaskForm:: state.priorityValue is ', this.state);
    }
    render() {
        var modalBg = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerModalBg = this.state.transparent ? {backgroundColor: '#fff', padding: 20} : null;
        return (
            <View>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}>
                    <View style={[footerStyle.modalContainer, modalBg]}>
                        <View style={[footerStyle.modalView, innerModalBg]}>
                            <View style={footerStyle.addTaskWrap}>
                                <Text style={footerStyle.labelLeft}>Task: </Text>
                                <View style={footerStyle.inputTaskLabelWrap}>
                                    <TextInput
                                        multiline={true}
                                        style={footerStyle.inputTask}
                                        ref='taskDesc'
                                    />
                                    <Text style={footerStyle.labelTaskTime}> x5</Text>
                                </View>
                            </View>
                            <View style={footerStyle.subTaskWrap}>
                                <Text style={footerStyle.labelLeft}>Taskslice: </Text>
                                <View style={footerStyle.subInputWrap}>
                                    <View style={footerStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={footerStyle.inputSubTask}
                                            ref='subtaskDesc1'
                                        />
                                        <Text> x2</Text>
                                    </View>
                                    <View style={footerStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={footerStyle.inputSubTask}
                                            ref='subtaskDesc2'
                                        />
                                        <Text> x2</Text>
                                    </View>
                                    <View style={footerStyle.inputSubTaskLabelWrap}>
                                        <TextInput
                                            style={footerStyle.inputSubTask}
                                            ref='subtaskDesc3'
                                        />
                                        <Text> x1</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={footerStyle.labelPriorityWrap}>
                                <Text style={footerStyle.labelLeft}>重要程度:</Text>
                                <View style={footerStyle.colorLabelWrap}>
                                    <ColorDots options={['#f00', 'orange', '#00f', 'green', 'purple']}
                                               onSelect={this._selectPrior.bind(this)}/>
                                </View>
                            </View>
                            <View style={footerStyle.modalBtnWrap}>
                                <TouchableHighlight onPress={this._setModalVisible.bind(this,false)}
                                                    style={footerStyle.btnCancel}>
                                    <Text>取消</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={footerStyle.btnSave}
                                                    onPress={()=>{this._addTask(); this._setModalVisible.bind(this, false)}}>
                                    <Text style={footerStyle.textSave}>保存</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={footerStyle.footerBtnWrap}>
                    <TouchableHighlight style={footerStyle.footerBtn} onPress={this._setModalVisible.bind(this, true)}>
                        <Text style={footerStyle.footerText}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    tasks: state.tasks
});
const mapDispatchToProps = (dispatch) => ({
    addTaskAction: bindActionCreators(addTask, dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm);

const footerStyle = StyleSheet.create({
    //add btn at first screen
    footerBtnWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerBtn: {
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
    footerText: {
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
    labelPriority: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    colorP1: {
        backgroundColor: '#ff0000',
    },
    colorP2: {
        backgroundColor: 'orange',
    },
    colorP3: {
        backgroundColor: '#0000ff',
    },
    colorP4: {
        backgroundColor: 'green',
    },
    colorP5: {
        backgroundColor: 'purple',
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
