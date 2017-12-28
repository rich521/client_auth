import { combineReducers } from 'redux';
import { RootState } from '../store/rootStore';
import { hello } from './hello';

const rootReducer = combineReducers<RootState>({
    hello,
});

export { rootReducer };
