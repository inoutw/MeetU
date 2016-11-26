/**
 * Created by qinai on 8/22/16.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, Modal} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {store} from '../store/index.js';

import {addTask} from '../actions/actionCreators.js';


class Footer extends Component{
    constructor(props) {
        super(props);
        console.log('Footer:: this.props is ', this.props);
        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: true,
            priorityValue: 0,
        };
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _addTask(){
        console.log('Footer::this.refs.taskDesc._lastNativeText is ', this.refs.taskDesc._lastNativeText);
        var newTask = {};
        newTask['taskid'] = 100;
        newTask['priority'] = this.state.priorityValue;
        newTask['desc'] = this.refs.taskDesc._lastNativeText;
        newTask['timestamp'] = 5;
        //newTask['subtask'] =

        store.dispatch(addTask(newTask));
        console.log('Footer:: this.props are ', this.props);
        this._setModalVisible(false);
    }

    _setProrityValue(pValue){
        this.setState({priorityValue: pValue});
    }

    _priorPressStyle(borderColor='#fff'){
        return {
            padding: 2,
            borderWidth: 1,
            borderColor: borderColor,
            borderRadius: 15,
            marginTop: -3,
        }
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
                                        ref='taskDesc'
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
                            <View style = {footerStyle.labelPriorityWrap}>
                                <Text style = {footerStyle.labelLeft}>重要程度:</Text>
                                <View style = {footerStyle.colorLabelWrap}>
                                    <TouchableHighlight style={this.state.priorityValue == 1? this._priorPressStyle('#f00'):this._priorPressStyle()}
                                                        onPress={this._setProrityValue.bind(this,1)} underlayColor='#f00'>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP1]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={this.state.priorityValue == 2? this._priorPressStyle('orange'):this._priorPressStyle()}
                                                        onPress={this._setProrityValue.bind(this,2)} underlayColor='orange'>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP2]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={this.state.priorityValue == 3? this._priorPressStyle('#00f'):this._priorPressStyle()}
                                                        onPress={this._setProrityValue.bind(this,3)} underlayColor='#00f'>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP3]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={this.state.priorityValue == 4? this._priorPressStyle('green'):this._priorPressStyle()}
                                                        onPress={()=>{this.setState({priorityValue:4})}} underlayColor='green'>
                                        <View style = {[footerStyle.labelPriority,footerStyle.colorP4]}></View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={this.state.priorityValue == 5? this._priorPressStyle('purple'):this._priorPressStyle()}
                                                        onPress={this._setProrityValue.bind(this,5)} underlayColor='purple'>
                                        <View style = {[footerStyle.labelPriority,footerStyle .colorP5]}></View>
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

const mapStateToProps = (state) => ({
    tasks: state.tasks
});
const mapDispatchToProps = (dispatch) => ({
    addTaskAction: bindActionCreators(addTask, dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

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
        borderColor: '#f00',
        borderRadius: 15,
        marginTop: -3,
    },

});
