import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
 } from '../actions/types';

const defaultState = {
    email: '',
    password: '',
    loading: null,
    error: '',
    user: null
};

export default (state = defaultState, action) => {
    const { payload, type } = action;
    switch (type) {
        case EMAIL_CHANGED:
            return { ...state, email: payload };
        case PASSWORD_CHANGED:
            return { ...state, password: payload };
        default:
            return state;

    }
};
