export enum ActionTypes {
    SET_EMAIL = 'SET_EMAIL',
    SET_PASSWORD = 'SET_PASSWORD',

    USER_AUTH = 'USER_AUTH',
    USER_UNAUTH = 'USER_UNAUTH',
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

export type Actions = ISetEmail | ISetPassword | IUserAuth;
