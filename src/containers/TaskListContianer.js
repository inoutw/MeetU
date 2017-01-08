/**
 * Created by qinai on 12/10/16.
 */
import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as TaskActions from '../actions/actionCreators.js';
import TaskList from '../components/TaskList.js';

class TaskListContianer extends Component{

    componentWillMount(){
        // Injected by react-redux:
        let { dispatch } = this.props
        dispatch(TaskActions.fetchTasksIfNeeded());
    }
    render(){
        let { tasks, dispatch } = this.props
        console.log("TaskListContainer:: tasks in render is ", tasks);

        // You want a child component to be completely unaware of Redux.
        let taskActionCreators = bindActionCreators(TaskActions, dispatch);

        return (
            <TaskList tasks={tasks}
               {...taskActionCreators} />
        )
    }
}
const mapStateToProps = (state) => {
    console.log("TaskListConatiner:: state is", state);
    return {
        tasks: state.tasks.tasks
    }
}
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch: bindActionCreators(TaskActions, dispatch)
//     }
// }
// TaskListContianer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TaskList);

export default connect(mapStateToProps)(TaskListContianer);
//export default TaskListContianer;