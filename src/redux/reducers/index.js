import { combineReducers } from "redux";
import dataReducer from './data';
import query from './query';
import results from './results';
import date from './date';
import images from './images'
import imgQuery from './imgQuery'

const rootReducer = combineReducers({
    dataReducer, 
    date,
    query, 
    results, 
    images, 
    imgQuery
    
})

export default rootReducer;
