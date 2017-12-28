import { ActionTypes } from './actionTypes';

export const AppActions = {
    setName: (name: string) => ({ type: ActionTypes.SET_NAME, name }),
    setAge: (age: number) => ({ type: ActionTypes.SET_AGE, name }),
};
