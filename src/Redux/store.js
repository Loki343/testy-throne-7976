import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { authReducer } from './AuthReducer/reducer';
import thunk from "redux-thunk"
import {reducer as ProReducer} from "./Products_Reducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    ProReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
