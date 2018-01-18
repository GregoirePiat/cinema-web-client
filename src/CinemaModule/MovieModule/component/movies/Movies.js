import React, {Component} from 'react';
import {connect} from "react-redux";
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {CircularProgress} from 'material-ui/Progress';
import * as movieAction from "../../store/actions";
import List from './list';
import AddIcon from 'material-ui-icons/Add';
import {Button} from "material-ui";
import {NavLink} from "react-router-dom";





class Movies extends Component {

    componentDidMount() {
        if (!this.props.upToDate || !(this.props.movies.length > 0)) {
            this.props.onInitPeople();
        }
    }

    componentDidUpdate() {
        console.log(this.props);
        if (!this.props.upToDate) {
            this.props.onInitPeople();
        }
    }



    render() {
        let list = <p>Aucun film disponnible</p>
        if(!this.props.upToDate) {
            list = <div className="center-loader"><CircularProgress  size={200}/></div>;
        }

        if (this.props.movies.length > 0) {
            list = <List movies={this.props.movies} />
        }

        return (
            <div className="relative-block">
                <div className="top-position">
                    <Button fab mini color="primary" aria-label="add" component={NavLink} to={this.props.location.pathname + '/new'} >
                        <AddIcon/>
                    </Button>
                </div>
                <div className="margin-top-bot">
                    <Typography type="headline" component="h1" align='center'>
                        Liste des films
                    </Typography>
                </div>
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
        onInitPeople: () => dispatch(movieAction.initMovieListRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)