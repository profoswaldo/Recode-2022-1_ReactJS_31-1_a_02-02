import {ADD_TODO} from './actionTypes';

export const addTodo = todoName => ({
    type: ADD_TODO,
    payload: todoName
})