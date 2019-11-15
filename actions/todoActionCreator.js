import { ADD_TODO, DELETE_TODO } from './constants';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index
    };
};