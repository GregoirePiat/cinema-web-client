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
            upToDate:true
        },
    }
};

const selectMovie = (state, action) => {
    return {
        ...state,
        movie: action.payload
    }
};

const downTodate = (state, action) => {
    return {
        ...state,
        movies: {
            ...state.movies,
            upToDate:false
        },
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIE_LIST:
            return setMovieList(state,action);
        case actionTypes.ADD_MOVIE:
            return downTodate(state, action);
        case actionTypes.UPDATE_MOVIE:
            return downTodate(state, action);
        case actionTypes.DELETE_MOVIE:break;
        case actionTypes.SELECT_MOVIE:
            return selectMovie(state, action);
        default:
            return state;
    }
};

export default reducer;