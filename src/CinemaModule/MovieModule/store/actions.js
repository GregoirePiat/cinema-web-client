import * as actionTypes from './actionTypes';
import api from '../../../axios';

export const setMovieList = (movies) => {
    return {
        type: actionTypes.SET_MOVIE_LIST,
        payload: movies
    }
};

export const addMovie = (movie) => {
    return {
        type: actionTypes.ADD_MOVIE,
        payload: movie
    }
};

export const updateMovie = (movie) => {
    return {
        type: actionTypes.UPDATE_MOVIE,
        payload: movie
    }
};

export const deleteMovie = (movie) => {
    return {
        type: actionTypes.DELETE_MOVIE,
        payload: movie
    }
};

export const selectMovie = (movie) => {
    return {
        type: actionTypes.SELECT_MOVIE,
        payload: movie
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

export const deleteMovieByIdRequest = (id) => {
    return dispatch => {
        api.delete('/movies/' + id)
            .then(response => {
                dispatch(deleteMovie(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};


export const saveMovieRequest = (movie) => {
    const actors = movie.actors;
    const movieJson = {
        ...movie,
        actors:null
    };
    const request = movie.id ? api.put('/movies/' + movie.id,movieJson) : api.post('/movies/',movieJson);


    return dispatch => {
        request.then(response1 => {
            if(response1.data && response1.data.id) {
                actors.map(actor => {
                    actor.id.movieId = response1.data.id;
                    actor.movie = {id:response1.data.id};
                    return actor
                });
                api.put('/movies/' + response1.data.id +'/actor/', actors)
                    .then(reponse2 => {
                        dispatch(
                            movie.id ? updateMovie(response1.data) : addMovie(response1.data)
                        );
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }).catch(error => {
            console.log(error);
        })
    };
};