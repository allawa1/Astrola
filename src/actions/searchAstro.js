import axios from 'axios';
import { REQUEST_RESULTS, RECEIVE_RESULTS } from './actionTypes';

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

export function fetchResults(query) {
    return dispatch => {
        dispatch(requestResults(query));

        return axios
            .get(
                `https://images-api.nasa.gov/search?q=${query}`
            )
            .then(res => {
                dispatch(receiveResults(res.data))
                console.log(res)
            });
    };
}