import { createStore } from 'redux';
// import { addTodo } from '../actions/todoActionCreator';
import {
    todoReducer
} from '../reducers/todoReducer';

const store = createStore(todoReducer);
// store.subscribe((a) => {
//     console.log('dispatchが実行されて更新された');
// });

// const addAction = addTodo('ダミーデータ');
// store.dispatch(addAction);

// console.log(store.getState());

export default store;