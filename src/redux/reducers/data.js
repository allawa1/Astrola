import {REQUEST_DATA, RECEIVE_DATA} from '../../actions/actionTypes';
//import fetchData from '../../actions/astro'
// console.log(fetchData())
// export const dataReducer = ( state ={}, action)=>{
//     return{ 
                
//         type: FETCH_DATA, 
//         payload: {
//             ...state, 
//             data: fetchData()
//         }

//     } 

    
// }

//export {dataReducer};

function dataReducer(
    state = {
        isFetching: false,
        data: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                
            });
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

export default dataReducer;