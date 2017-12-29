import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import { IRootState, ILogin } from '../store/rootStore';
import { History } from 'history';

const ROOT_URL = 'http://localhost:4030';

interface ILoginDetails {
    email: string;
    password: string;
}

export const AppActions = {
    setEmail: (email: string) => ({ type: ActionTypes.SET_EMAIL, email }),
    setPassword: (password: string) => ({ type: ActionTypes.SET_PASSWORD, password }),

    userLogin: (loginDetails: ILoginDetails, history: History) => {
        return (dispatch: Dispatch<IRootState>) => {
            fetch(`${ROOT_URL}/signin`, {
                method: 'POST',
                body: JSON.stringify(loginDetails),
            })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: ActionTypes.USER_AUTH });
                localStorage.setItem('token', data.token);
                history.push('./feature');
            })
            .catch(() => {

            });
        };
    },
};
