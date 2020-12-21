import { REQUEST_IMG, RECEIVE_IMAGES } from '../../actions/actionTypes';


function images(
    state = {
        isFetching: false,
        images: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_IMG:
            return Object.assign({}, state, {
                isFetching: true,
                
            });
        case RECEIVE_IMAGES:
            return Object.assign({}, state, {
                isFetching: false,
                images: action.images,
                
            });
        default:
            return state;
    }
}

export default images;