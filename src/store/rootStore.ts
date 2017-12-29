
export interface ILogin {
    email: string;
    password: string;
    authenticated: boolean;
    error: string;
}

export interface IRootState {
  login: ILogin;
}

export const rootState: IRootState = {
    login: {
        email: '',
        password: '',
        authenticated: false,
        error: '',
    },
};
