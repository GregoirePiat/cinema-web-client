import React, { Component } from 'react';
import './MovieContainer.css';
import Paper from 'material-ui/Paper';
import Movies from '../component/movies/Movies';
import Movie from '../component/movie/Movie';
import AddMovie from '../component/movie/form/Form';
import {Switch, Route, Redirect} from "react-router-dom"



class MovieContainer extends Component {

    render() {
        return (
            <Paper>
                <Switch>
                    <Route path={this.props.match.url + '/new'} component={AddMovie}/>
                    <Route path={this.props.match.url + '/:id'} component={Movie}/>
                    <Route path={this.props.match.url} component={Movies}/>
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>
            </Paper>
        );
    }
}



export default MovieContainer;
