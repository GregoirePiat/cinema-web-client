import React, {Component} from 'react';
import {connect} from "react-redux";
import * as movieAction from "../../store/actions";
import {CircularProgress} from 'material-ui/Progress';
import Detail from './detail/detail';
import Form from './form/Form';
import {Switch, Route, Redirect} from "react-router-dom"






class Movie extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getMovieByIdRequest(this.props.match.params.id);
        }
    }


    render() {

        let movie = <div className="center-loader"><CircularProgress  size={200}/></div>;

        if (this.props.movie) {
            movie = (
                <Switch>
                    <Route path={this.props.match.url + '/edit'} component={() => <Form movie={this.props.movie}/>} />
                    <Route path={this.props.match.url} component={() => <Detail movie={this.props.movie}/>}/>
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>
            )
        }

        return movie;
    }
}

const mapStateToProps = states => {
    return {
        movie: states.movie.movie
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getMovieByIdRequest: (id) => dispatch(movieAction.getMovieByIdRequest(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
