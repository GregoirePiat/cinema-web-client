import * as actionTypes from './actionTypes';
import api from '../../../axios';

export const setCategoryList = (movies) => {
    return {
        type: actionTypes.SET_CATEGORY_LIST,
        payload: movies
    }
};

export const addCategory = (movie) => {
    return {
        type: actionTypes.ADD_CATEGORY,
        payload: movie
    }
};

export const updateCategory = (movie) => {
    return {
        type: actionTypes.UPDATE_CATEGORY,
        payload: movie
    }
};

export const deleteCategory = (movie) => {
    return {
        type: actionTypes.DELETE_CATEGORY,
        payload: movie
    }
};

export const selectCategory = (movie) => {
    return {
        type: actionTypes.SELECT_CATEGORY,
        payload: movie
    }
};

export const initCategoryListRequest = () => {
    return dispatch => {
        api.get('/categories/')
            .then(response => {
                dispatch(setCategoryList(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};

export const getCategoryByIdRequest = (id) => {
    return dispatch => {
        api.get('/categories/' + id)
            .then(response => {
                dispatch(selectCategory(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};

export const deleteCategoryByIdRequest = (id) => {
    return dispatch => {
        api.delete('/categories/' + id)
            .then(response => {
                dispatch(deleteCategory(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};

export const saveCategoryRequest = (category) => {
    category.movies = null;
    return dispatch => {
        (category.id ? api.put('/categories/' + category.id, category) : api.post('/categories/', category))
            .then((response) => {
                dispatch(
                    category.id ? updateCategory(response.data) : addCategory(response.data)
                );
            })
            .catch(error => {
                console.log(error);
            })
        ;
    };
};