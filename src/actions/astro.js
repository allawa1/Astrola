import axios from 'axios'; 
import { REQUEST_DATA, RECEIVE_DATA } from './actionTypes';


function requestData(date) {
    return {
        type: REQUEST_DATA,
        date,
    };
}

function receiveData(json) {
    return {
        type: RECEIVE_DATA,
        data: json,
        receivedAt: Date.now()
    };
}

export function fetchData (date){
    //const API_KEY = 'ky0f7lB2fJeTkSb5C76KyOK97VI3b0QzeGaQwPZe';
    return dispatch => {
        dispatch(requestData(date));

    return axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=ky0f7lB2fJeTkSb5C76KyOK97VI3b0QzeGaQwPZe&date=${date}`)

        .then(res => {
            dispatch(receiveData(res.data))
            console.log(res)
        });

    };
}
    // const API_KEY = 'ky0f7lB2fJeTkSb5C76KyOK97VI3b0QzeGaQwPZe';
    // const DATE = query
    // const URL = 'https://api.nasa.gov/planetary/apod?api_key=';
    // const request = axios.get(URL+API_KEY);
    // return {
    //     type: 'FETCH_DATA',
    //     query,
    //     payload: request
    // };




