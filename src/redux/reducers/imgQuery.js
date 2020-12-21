import { IMGQUERY_CHANGED } from '../../actions/actionTypes'

const initialState = '';

const imgQuery = (state = initialState, action) => {
    switch (action.type) {
        case IMGQUERY_CHANGED: {
            return action.imgQuery;
        }
        default: {
            return state;
        }
    }
};

export default imgQuery;