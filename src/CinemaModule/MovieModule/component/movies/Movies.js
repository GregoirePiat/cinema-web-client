import React, {Component} from 'react';
import {connect} from "react-redux";
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {CircularProgress} from 'material-ui/Progress';
import * as movieAction from "../../store/actions";
import List from './list';




class Movies extends Component {

    componentDidMount() {
        if (!this.props.movies.upToDate || !(this.props.movies.length > 0)) {
            this.props.onInitMovies();
        }
    }



    render() {

        let list = <CircularProgress className="" size={50}/>;

        if (this.props.movies.length > 0) {
            list = <List movies={this.props.movies} />
        }

        return (
            <div>
                <Typography type="headline" component="h1" align='center'>
                    Liste des films
                </Typography>
                <Divider/>
                {list}
            </div>
        )
    }
}

const mapStateToProps = states => {
    return {
        movies: states.movie.movies.data,
        upToDate: states.movie.movies.upToDate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitMovies: () => dispatch(movieAction.initMovieListRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)