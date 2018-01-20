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

const selectPerson = (state, action) => {
    return {
        ...state,
        category: action.payload
    }
};

const downTodate = (state, action) => {
    return {
        ...state,
        categories: {
            ...state.categories,
            upToDate:false
        },
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORY_LIST:
            return setCategoryList(state,action);
        case actionTypes.ADD_CATEGORY:
            return downTodate(state, action);
        case actionTypes.UPDATE_CATEGORY:
            return downTodate(state, action);
        case actionTypes.DELETE_CATEGORY:
            return downTodate(state, action);
        case actionTypes.SELECT_CATEGORY:
            return selectPerson(state, action);
        default:
            return state;
    }
};

export default reducer;