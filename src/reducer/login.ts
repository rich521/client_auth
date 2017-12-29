import { rootState, IRootState } from '../store/rootStore';
import { Actions, ActionTypes } from '../actions/actionTypes';

export const login = (state = rootState.login, action: Actions): IRootState['login'] => {
    switch (action.type) {
        case ActionTypes.SET_EMAIL: return { ...state, email: action.email };
        case ActionTypes.SET_PASSWORD: return { ...state, password: action.password };
        case ActionTypes.USER_AUTH: return { ...rootState.login, authenticated: true };
        case ActionTypes.USER_UNAUTH: return { ...rootState.login, authenticated: false };
        case ActionTypes.USER_ERROR: return { ...state, error: action.error };

        default: return state;
    }
};
