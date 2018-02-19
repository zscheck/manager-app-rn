import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
 } from '../actions/types';

const defaultState = {
    email: '',
    password: '',
    loading: null,
    error: '',
    user: null
};

export default (state = defaultState, action) => {
    // console.log(action);
    const { payload, type } = action;
    switch (type) {
        case EMAIL_CHANGED:
            return { ...state, email: payload };
        case PASSWORD_CHANGED:
            return { ...state, password: payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...defaultState, user: payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;

    }
};
