import store from '../../store/index';
import { todoReducer } from '../../reducers/todoReducer';

describe('sotre/index.js TEST', () => {
    it('stateの初期値はカラ配列', () => {
        const mockAction = {};
        const defaultState = todoReducer(undefined, mockAction);

        expect( store.getState() ).toStrictEqual(defaultState);
    });
});