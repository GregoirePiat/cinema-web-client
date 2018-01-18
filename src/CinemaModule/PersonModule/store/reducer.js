import * as actionTypes from './actionTypes'

const initialState = {
    people: {
        data:[],
        upToDate:false
    },
    person: null
};
const setPersonList = (state, action) => {
    return {
        ...state,
        people: {
            data:action.payload,
            upToDate:true
        },
    }
};

const selectPerson = (state, action) => {
    return {
        ...state,
        person: action.payload
    }
};

const downTodate = (state, action) => {
    return {
        ...state,
        people: {
            ...state.people,
            upToDate:false
        },
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PERSON_LIST:
            return setPersonList(state,action);
        case actionTypes.ADD_PERSON:
            return downTodate(state, action);
        case actionTypes.UPDATE_PERSON:
            return downTodate(state, action);
        case actionTypes.DELETE_PERSON:
            return downTodate(state, action);
        case actionTypes.SELECT_PERSON:
            return selectPerson(state, action);
        default:
            return state;
    }
};

export default reducer;