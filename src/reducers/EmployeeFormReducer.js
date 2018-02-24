import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CLEAR
} from '../actions/types';

const defaultState = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case EMPLOYEE_UPDATE:
            return {
                ...state,
                [payload.prop]: payload.value
            };
        case EMPLOYEE_CLEAR:
            return defaultState;

        default:
            return state;
    }
};
