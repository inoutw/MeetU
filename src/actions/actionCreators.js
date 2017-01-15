/**
 * Created by qinai on 11/21/16.
 */
'use strict';

import * as TYPES from './types.js';
import {AsyncStorage} from 'react-native';
/*
 * v0: Async get tasks from remote url
export const getTasks = () => ({
    type: TYPES.GET_TASKS
})
export const receiveTasks = (json) => {
    console.log('Action creators-receiveTasks:: json is ', json);
    AsyncStorage.setItem("tasks", JSON.stringify(json.tasks), ()=>{
        AsyncStorage.getItem('tasks', (err, result) => {
            console.log('actionCreators:: AsyncStorage result is',result);
        });
    });
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
            dispatch(receiveTasks(json))})
}
export const fetchTasksIfNeeded = () => (dispatch, getState) => {
    console.log('actioncreators:: getState() is ', getState());
    if (shouldFetch(getState())) {
        return dispatch(fetchTasks())
    }
}
    */
//v1: get tasks from AsyncStorage and dispatch a action to update the state in store
export const getTasksFormStorage = () => (dispatch, getState) => { //?return a function with params dispatch and getState?
    console.log('actioncreators:: getState() is ', getState());
    AsyncStorage.getItem('tasks', (err, result) => {
        //console.log('actionCreators:: AsyncStorage result is',result);
        return dispatch({
            type: TYPES.RECEIVE_TASKS,
            tasks: JSON.parse(result)
        })
    });
}
export function addTask(task){
    var taskArr = [];
    AsyncStorage.getItem("tasks")
        .then((result)=> {
            taskArr = JSON.parse(result);
            taskArr.push(task);
            AsyncStorage.setItem("tasks", JSON.stringify(taskArr));
        });
    return {
        type: TYPES.ADD_TASK,
        task
    };
}
//v0
/*
 export function deleteTask(taskid){
 return {
 type: TYPES.DELETE_TASK,
 taskid
 };
 }
 */
//v1: deleteTaskFromStorage
export const deleteTask = (taskid) => (dispatch, getState) => {
    console.log('actioncreators:: getState() is ', getState());
    let taskAfterDel = getState().tasks.tasks.filter( task => task.taskid !== taskid);
    AsyncStorage.setItem('tasks', JSON.stringify(taskAfterDel),(err, result) => {
        console.log('actionCreators:: AsyncStorage result is',result);
        return dispatch({
            type: TYPES.DELETE_TASK,
            taskid
        })
    });

}