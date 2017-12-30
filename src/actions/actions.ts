import { ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import { History } from 'history';
import { IRootState, ILogin } from '../store/rootStore';
import { TOKEN, ROOT_URL } from '../store/constants';

interface ILoginDetails {
    email: string;
    password: string;
}

type PostEndPoint = 'signin' | 'signup';

const restService = (method: 'POST', endPoint: PostEndPoint, body: object) => {
    return fetch(`${ROOT_URL}/${endPoint}`, {
        method,
        body: JSON.stringify(body),
    }).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    });
};

export const AppActions = {
    setEmail: (email: string) => ({ type: ActionTypes.SET_EMAIL, email }),
    setPassword: (password: string) => ({ type: ActionTypes.SET_PASSWORD, password }),
    setPasswordConfirm: (passwordConfirm: string) => ({ type: ActionTypes.SET_PASSWORD_CONFIRM, passwordConfirm }),

    userError: (error: string) => ({ type: ActionTypes.USER_ERROR, error }),
    userLogout: () => {
        window.localStorage.removeItem(TOKEN);
        return { type: ActionTypes.USER_UNAUTH };
    },
    userLogin: (loginDetails: ILoginDetails, history: History) => {
        return (dispatch: Dispatch<IRootState>) => {
            restService('POST', 'signin', loginDetails)
            .then((data) => {
                dispatch({ type: ActionTypes.USER_AUTH });
                window.localStorage.setItem(TOKEN, data.token);
                history.push('./feature');
            })
            .catch(() => dispatch({
                type: ActionTypes.USER_ERROR, error: 'Incorrect login details',
            }));
        };
    },
    userSignup: (loginDetails: ILoginDetails, history: History) => {
        return ((dispatch: Dispatch<IRootState>) => {
            restService('POST', 'signup', loginDetails)
            .then((data) => {
                dispatch({ type: ActionTypes.USER_AUTH });
                window.localStorage.setItem(TOKEN, data.token);
                history.push('./feature');
            })
            .catch((error: Error) => dispatch({
                type: ActionTypes.USER_ERROR, error: error.message,
            }));
        });
    },
};
