export enum ActionTypes {
    SET_EMAIL = 'SET_EMAIL',
    SET_PASSWORD = 'SET_PASSWORD',

    USER_AUTH = 'USER_AUTH',
    USER_UNAUTH = 'USER_UNAUTH',
    USER_ERROR = 'USER_ERROR',
}

interface ISetEmail {
    type: ActionTypes.SET_EMAIL;
    email: string;
}

interface ISetPassword {
    type: ActionTypes.SET_PASSWORD;
    password: string;
}

interface IUserAuth {
    type: ActionTypes.USER_AUTH;
}

interface IUserUnauth {
    type: ActionTypes.USER_UNAUTH;
}

interface IUserAuthError {
    type: ActionTypes.USER_ERROR;
    error: string;
}

export type Actions = 
    ISetEmail |
    ISetPassword |
    IUserAuth |
    IUserUnauth |
    IUserAuthError;
