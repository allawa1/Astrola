import axios from 'axios';
import { REQUEST_RESULTS, RECEIVE_RESULTS, REQUEST_IMG, RECEIVE_IMAGES } from './actionTypes';



function requestResults(query) {
    return {
        type: REQUEST_RESULTS,
        query,

    };
}
function receiveResults(json) {
    
    return {
        type: RECEIVE_RESULTS,
        items: json.collection.items,
        receivedAt: Date.now()
    };
}

function requestImg(imgQuery) {
    return {
        type: REQUEST_IMG,
        imgQuery,

    };
}

function receiveImages(json) {
    
    return {
        type: RECEIVE_IMAGES,
        images: json.collection.items[Math.floor(Math.random() * json.collection.items.length)],
        receivedAt: Date.now()
    };
}

export function fetchResults(query) {
    return dispatch => {
        dispatch(requestResults(query));
        return axios
            .get(
                `https://images-api.nasa.gov/search?q=${query}&media_type=image`
            )

            .then(res => {
                dispatch(receiveResults(res.data))
                console.log(res)
            });
    };
}


export function fetchImages(imgQuery) {
    return dispatch => {
        dispatch(requestImg(imgQuery));
        return axios
            .get(
                `https://images-api.nasa.gov/search?q=${imgQuery}&media_type=image`
            )
            .then(res => {
                dispatch(receiveImages(res.data))
                console.log(res)
            });
    };
}
