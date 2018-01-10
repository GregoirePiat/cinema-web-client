import * as actionTypes from './actionTypes'

const initialState = {
    movies: {
        data:[],
        upToDate:false
    },
    movie: null

};
const setMovieList = (state, action) => {
    return {
        ...state,
        movies: {
            data:action.payload,
            upToDate:false
        },
    }
};

const selectMovie = (state, action) => {
    return {
        ...state,
        movie: action.payload
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIE_LIST:
            return setMovieList(state,action);
        case actionTypes.ADD_MOVIE:
        case actionTypes.UPDATE_MOVIE:
        case actionTypes.DELETE_MOVIE:
        case actionTypes.SELECT_MOVIE:
            return selectMovie(state, action);
        default:
            return state;
    }
};

export default reducer;