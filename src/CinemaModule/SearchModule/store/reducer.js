import * as actionTypes from './actionTypes'

const initialState = {
    movies: {
        data:[],
        upToDate:false
    },
};
const setMoviesList = (state, action) => {
    return {
        ...state,
        movies: {
            data:action.payload,
            upToDate:true
        },
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIE_LIST_SEARCH:
            return setMoviesList(state,action);
        default:
            return state;
    }
};

export default reducer;