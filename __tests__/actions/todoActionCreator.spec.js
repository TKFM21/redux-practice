import { ADD_TODO } from '../../actions/constants';
import { addTodo } from '../../actions/todoActionCreator';

describe('todoActionCreator Test', () => {
    it('addTodo function', () => {
        const dummyText = 'Dummy text';
        const action = addTodo(dummyText);

        expect( action ).toStrictEqual({
            type: ADD_TODO,
            text: dummyText
        });
    });
});