/**
 * Created by qinai on 12/10/16.
 */
import React from 'react';
import {connect} from 'react-redux';

import {deleteTask} from '../actions/actionCreators.js';
import TaskList from '../components/TaskList.js';

const mapStateToProps = (state) => {
    console.log('TaskListContainer:: state is', state);
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProp = () => ({
    taskAction: deleteTask
})
const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProp
)(TaskList);

export default TaskListContainer;