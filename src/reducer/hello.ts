import { rootState, Hello, RootState } from '../store/rootStore';
import { Actions, ActionTypes } from '../actions/actionTypes';

export const hello = (state = rootState.hello, action: Actions): RootState['hello'] => {
    switch (action.type) {
        case ActionTypes.SetName: return { ...state, name: action.name };
        case ActionTypes.SetAge: return { ...state, age: action.age };

        default: return state;
    }
};
