import { rootState, IRootState } from '../store/rootStore';
import { Actions, ActionTypes } from '../actions/actionTypes';

export const login = (state = rootState.login, action: Actions): IRootState['login'] => {
    switch (action.type) {
        case ActionTypes.SET_EMAIL: return { ...state, email: action.email };
        case ActionTypes.SET_PASSWORD: return { ...state, password: action.password };
        case ActionTypes.USER_AUTH: return { email: '', password: '', authenticated: true };

        default: return state;
    }
};
