import { combineReducers } from 'redux';
import { IRootState } from '../store/rootStore';
import { login } from './login';

const rootReducer = combineReducers<IRootState>({
    login,
});

export { rootReducer };
