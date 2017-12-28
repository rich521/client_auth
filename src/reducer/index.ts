import { combineReducers } from 'redux';

const theDefaultReducer: any = (state = 0, action: any) => state;

const rootReducer = combineReducers({
    theDefaultReducer,
});

export { rootReducer };
