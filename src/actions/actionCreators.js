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
// AsyncStorage.setItem('tasks', JSON.stringify([{
//     "taskid": 4,
//     "priority": 1,
//     "desc": "Reading and learning",
//     "timestamp": 5
// }])
// );
//v1: get tasks from AsyncStorage and dispatch a action to update the state in store
export const getTasksFormStorage = () => (dispatch, getState) => { //?return a function with params dispatch and getState?
    console.log('actioncreators:: getState() is ', getState());
    AsyncStorage.getItem('tasks', (err, result) => {
        console.log('actionCreators:: AsyncStorage result is',result);
        //console.log('actionCreators:: AsyncStorage result is',result.length);
        // if(!result || result.length==0||JSON.parse(result).length==0){
        //     result = '[{"desc": "Add task to start your day","priority":1,"taskid":1}]'
        // }
        result = result? result: "[]";
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
            taskArr.push(JSON.parse(result));
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
    let tasksAfterDel = getState().tasks.tasks.filter( task => task.taskid !== taskid);
    console.log('JSON.stringify(tasksAfterDel)', JSON.stringify(tasksAfterDel));
    AsyncStorage.setItem('tasks', JSON.stringify(tasksAfterDel),(err, result) => {
        console.log('actionCreators:: AsyncStorage result is',result);
        return dispatch({
            type: TYPES.DELETE_TASK,
            taskid
        })
    });
}

export const getTodoItemList = () => (dispatch, getState) => {
    console.log('getTodoItemList:: getState() is ', getState());
    AsyncStorage.getItem('todoItems', (err, result) => {
        console.log('actionCreators:: AsyncStorage result is',result);
        result = result? result: "[]";
        return dispatch({
            type: TYPES.RECEIVE_TASKS,
            tasks: JSON.parse(result)
        })
    });
}
export function addTodoItem(todoItem){
    var todoItemArr = [];
    AsyncStorage.getItem("todoItems")
        .then((result)=> {
            todoItemArr.push(JSON.parse(result));
            todoItemArr.push(todoItem);
            AsyncStorage.setItem("todoItems", JSON.stringify(todoItemArr));
        });
    return {
        type: TYPES.ADD_TASK,
        todoItem
    };
}
export const deleteTodoItem = (todoItemId) => (dispatch, getState) => {
    console.log('actioncreators:: getState() is ', getState());
    let todoItemsAfterDel = getState().tasks.tasks.filter( task => task.todoItemId !== todoItemId);
    console.log('JSON.stringify(tasksAfterDel)', JSON.stringify(tasksAfterDel));
    AsyncStorage.setItem('tasks', JSON.stringify(tasksAfterDel),(err, result) => {
        console.log('actionCreators:: AsyncStorage result is',result);
        return dispatch({
            type: TYPES.DELETE_TASK,
            taskid
        })
    });
}
