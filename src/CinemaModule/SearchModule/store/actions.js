import * as actionTypes from './actionTypes';
import api from '../../../axios';

export const setSearchMovieList = (movies) => {
    return {
        type: actionTypes.SET_MOVIE_LIST_SEARCH,
        payload: movies
    }
};

export const search = (query) => {
    return dispatch => {
        if (query === '') {
            dispatch(setSearchMovieList([]));
        } else {
            api.get('/search/movie/' + query)
                .then(response => {
                    dispatch(setSearchMovieList(response.data));
                })
                .catch(error => {
                    dispatch(setSearchMovieList([]));
                    console.log(error);
                });
        }
    };
};
