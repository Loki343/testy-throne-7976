import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from './AuthReducer/reducer';

const rootReducer = combineReducers({
    authReducer
});

export const store = legacy_createStore(rootReducer)