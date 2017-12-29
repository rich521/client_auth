import { ActionTypes } from './actionTypes';

export const AppActions = {
    setEmail: (email: string) => ({ type: ActionTypes.SET_EMAIL, email }),
    setPassword: (password: string) => ({ type: ActionTypes.SET_PASSWORD, password }),
};
