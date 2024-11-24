import { SET_USER_INFO } from './actions';

const initialState = {
    user: {
        name: 'John Doe',
        status: 'Active'
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};

export default userReducer;