import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import CategoryReducer from "./CategoryModule/store/reducer";
import PersonReducer from "./PersonModule/store/reducer";
import MovieReducer from "./MovieModule/store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        movie: MovieReducer,
        category: CategoryReducer,
        person: PersonReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);
