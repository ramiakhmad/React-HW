const initialState = {
    users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Mike'},
        { id: 3, name: 'Tom' },
    ],
    filter : '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':

            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;   
    }
};

export default rootReducer;