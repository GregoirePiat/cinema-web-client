import * as actionTypes from './actionTypes'

const initialState = {
    categories: {
        data:[],
        upToDate:false
    },
    category: null
};
const setCategoryList = (state, action) => {
    return {
        ...state,
        categories: {
            data:action.payload,
            upToDate:true
        },
    }
};

const selectCategory = (state, action) => {
    return {
        ...state,
        category: action.payload
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORY_LIST:
            return setCategoryList(state,action);
        case actionTypes.ADD_CATEGORY:
        case actionTypes.UPDATE_CATEGORY:
        case actionTypes.DELETE_CATEGORY:
        case actionTypes.SELECT_CATEGORY:
            return selectCategory(state, action);
        default:
            return state;
    }
};

export default reducer;