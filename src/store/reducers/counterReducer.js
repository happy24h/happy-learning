import actionTypes from '../actions/actionTypes';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + action.payload;
        case actionTypes.DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;
