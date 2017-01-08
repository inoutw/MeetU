/**
 * Created by qinai on 12/17/16.
 */

import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TextInput, Modal} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TaskForm from '../components/TaskForm.js';
import {addTask} from '../actions/actionCreators.js';



const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks
});
const mapDispatchToProps = (dispatch) => ({
    taskAction: bindActionCreators(addTask, dispatch)
})
const TaskFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm);

export default TaskFormContainer;
