/**
 * Created by qinai on 11/20/16.
 */
'use strict';

import * as TYPES from '../actions/types.js';
import ApiUtils from '../utils/ApiUtils.js';

const initailTaskState = [{
        "taskid": 1,
        "priority": 3,
        "desc": "Content change",
        "timestamp": 5,
        "subtask": [{
            "subid": "1.1",
            "desc": "content code",
            "timestamp": 2
        }, {
            "subid": "1.2",
            "desc": "merge content",
            "timestamp": 2
        }, {
            "desc": "test content",
            "timestamp": 1
        }]
    },
    {
        "taskid": 2,
        "priority": 2,
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
        "taskid": 3,
        "priority": 3,
        "desc": "Modify Email",
        "timestamp": 4,
    },
    {
        "taskid": 4,
        "priority": 1,
        "desc": "Single Template Project",
        "timestamp": 5,
    }]
const task = (state, action) => {
    switch(action.type){
        case TYPES.ADD_TASK:
            return action.task
        default:
            return state

    }
}
var initailTasksState = [];
const getInitailTasks = () => {
    return (
        fetch('http://localhost:9999/tasks.json')
            .then(ApiUtils.checkStatus)
            .then((response)=>response.json())
            .then((responseJson) => {
                console.log('Json is ', responseJson);
                initailTasksState = responseJson
                return initailTasksState;

            })
            .catch(e=>e)
    )

}
const tasks = (state = {
    isFetching: false,
    didInvalidate: false,
    tasks: []
} , action) => {
    //getInitailTasks();
    //console.log("reducers:: initailTasksState is ", initailTasksState);
    //console.log('reducers:: ...state.tasks are ', ...state.tasks);
    switch(action.type){
        case TYPES.ADD_TASK:
            return {
                tasks:[
                    ...state.tasks,
                    action.task]
            }
        case TYPES.DELETE_TASK:
            return {
                tasks: state.tasks.filter( task => task.taskid !== action.taskid)
            }
        case TYPES.GET_TASKS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case TYPES.RECEIVE_TASKS:
            console.log("reducers:: action.tasks is ", action.tasks);
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                tasks: action.tasks,
            }
        default:
            return state
            
    }
}
export default tasks;