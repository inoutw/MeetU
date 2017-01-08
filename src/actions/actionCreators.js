/**
 * Created by qinai on 11/21/16.
 */
'use strict';

import * as TYPES from './types.js';

export function addTask(task){
    return {
        type: TYPES.ADD_TASK,
        task
    };
}

export function deleteTask(taskid){
    return {
        type: TYPES.DELETE_TASK,
        taskid
    };
}

export const getTasks = () => ({
    type: TYPES.GET_TASKS
})
export const receiveTasks = (json) => {
    console.log('Action creators-receiveTasks:: json is ', json)
    return {
        type: TYPES.RECEIVE_TASKS,
        tasks: json.tasks
    }
}
const shouldFetch = (state) => {
    if (state.isFetching) {
        return false
    }
    return !state.didInvalidate
}
export const fetchTasks = () => dispatch => {
    dispatch(getTasks());
    return fetch(`http://localhost:9997/tasks.json`)
        .then(response => response.json())
        .then(json => {
            console.log("json is ", json);
            dispatch(receiveTasks(json))})
}
export const fetchTasksIfNeeded = () => (dispatch, getState) => {
    console.log('actioncreators:: getState() is ', getState());
    if (shouldFetch(getState())) {
        return dispatch(fetchTasks())
    }
}