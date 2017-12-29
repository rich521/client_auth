export enum ActionTypes {
    SET_EMAIL = 'SET_EMAIL',
    SET_PASSWORD = 'SET_PASSWORD',
}

interface ISetEmail {
    type: ActionTypes.SET_EMAIL;
    email: string;
}

interface ISetPassword {
    type: ActionTypes.SET_PASSWORD;
    password: string;
}

export type Actions = ISetEmail | ISetPassword;
