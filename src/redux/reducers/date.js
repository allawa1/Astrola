import { DATE_CHANGED } from '../../actions/actionTypes'

const initialState = '';

const date = (state = initialState, action) => {
    switch (action.type) {
        case DATE_CHANGED: {
            return action.date;
        }
        default: {
            return state;
        }
    }
};

export default date;