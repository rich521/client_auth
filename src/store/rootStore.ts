
export interface ILogin {
    email: string;
    password: string;
}

export interface IRootState {
  login: ILogin;
}

export const rootState: IRootState = {
    login: {
        email: '',
        password: '',
    },
};
