import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const defaultState = {};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case EMPLOYEES_FETCH_SUCCESS:
            // console.log(payload);
            return payload; 
        default:
            return state;
    }
};
