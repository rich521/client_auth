export enum ActionTypes {
    SET_EMAIL = 'SET_EMAIL',
    SET_PASSWORD = 'SET_PASSWORD',
    SET_PASSWORD_CONFIRM = 'SET_PASSWORD_CONFIRM',

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

interface ISetPasswordConfirm {
    type: ActionTypes.SET_PASSWORD_CONFIRM;
    passwordConfirm: string;
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
    ISetPasswordConfirm |
    IUserAuth |
    IUserUnauth |
    IUserAuthError;
