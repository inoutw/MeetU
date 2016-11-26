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