import { todoReducer } from '../../reducers/todoReducer';
import { addTodo, deleteTodo } from '../../actions/todoActionCreator';

describe('todoReducer Test', () => {
    it('action.type === ADD_TODOのとき、Todo1件追加した配列を返す', () => {
        const dummyText = 'Dummy text';
        const currentTodoList = ['text1'];
        const returnReducer = todoReducer(currentTodoList, addTodo(dummyText));

        expect( returnReducer ).toStrictEqual([...currentTodoList, dummyText]);
    });

    it('action.type === DELTE_TODOのとき、指定したTodo1件が削除された配列を返す', () => {
        const dummyText = 'Dummy';
        let state = [];
        [1, 2, 3].forEach( material => {
            state = todoReducer(state, addTodo(dummyText + material));
        });

        expect( state ).toStrictEqual([1, 2, 3].map( material => (dummyText + material)));

        const targetIndex = 1;
        const deletedState = todoReducer(state, deleteTodo(targetIndex));
        expect( deletedState ).toStrictEqual([1, 3].map( material => (dummyText + material)));
    });
});