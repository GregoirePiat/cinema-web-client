import * as actionTypes from './actionTypes';
import api from '../../../axios';

export const setMovieList = (movies) => {
    return {
        type: actionTypes.SET_MOVIE_LIST,
        payload:movies
    }
};

export const addMovie = (movie) => {
    return {
        type: actionTypes.ADD_MOVIE,
        payload:movie
    }
};

export const updateMovie = (movie) => {
    return {
        type: actionTypes.UPDATE_MOVIE,
        payload:movie
    }
};

export const deleteMovie = (movie) => {
    return {
        type: actionTypes.DELETE_MOVIE,
        payload:movie
    }
};

export const selectMovie = (movie) => {
    return {
        type: actionTypes.SELECT_MOVIE,
        payload:movie
    }
};

export const initMovieListRequest = () => {
    return dispatch => {
        api.get('/movies/')
            .then(response => {
                dispatch(setMovieList(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};

export const getMovieByIdRequest = (id) => {
    return dispatch => {
        api.get('/movies/' + id)
            .then(response => {
                dispatch(selectMovie(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};