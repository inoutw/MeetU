/**
 * Created by qinai on 12/10/16.
 */
import React, {Component, PropTypes} from 'react';
import {AsyncStorage, Text} from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as TaskActions from '../actions/actionCreators.js';
import TaskList from '../components/TaskList.js';

class TaskListContianer extends Component{
    constructor(){
        super();
    }
    componentWillMount(){
        // Injected by react-redux:
        let { dispatch } = this.props
        dispatch(TaskActions.getTasksFormStorage());
    }
    render(){
        let { tasks, dispatch } = this.props
        console.log("TaskListContainer:: this.state.tasks in render is ", tasks);
        // You want a child component to be completely unaware of Redux.
        let taskActionCreators = bindActionCreators(TaskActions, dispatch);
        if(tasks && tasks.length > 0){
            return (
                <TaskList tasks={tasks}
                    {...taskActionCreators} />
            )
        }else{
            return (<Text style={{flex:6}}>Start your day by adding task!</Text>)
        }
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