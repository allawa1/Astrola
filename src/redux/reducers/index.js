import { combineReducers } from "redux";
import dataReducer from './data';
import query from './query';
import results from './results';
import date from './date';

const rootReducer = combineReducers({
    dataReducer, 
    date,
    query, 
    results 
    
})

export default rootReducer;
