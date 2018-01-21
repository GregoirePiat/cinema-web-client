import React, {Component} from 'react';
import {connect} from "react-redux";
import {CircularProgress} from 'material-ui/Progress';
import * as searchAction from "../../store/actions";
import * as movieAction from "../../../MovieModule/store/actions";
import List from '../../../MovieModule/component/movies/list';
import {FormControl, Input} from "material-ui";


let oldQuery = '';

class Search extends Component {
    state = {
        query: ''
    };

    componentDidMount() {
        if (!(this.props.movies.length > 0)) {
            this.props.onInitPeople();
        }
    }

    componentDidUpdate() {
        if (!this.props.upToDate || oldQuery !== this.state.query) {
            this.props.search(this.state.query);
            oldQuery = this.state.query;
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    };


    render() {
        let list = '';
        if (!this.props.upToDate) {
            list = <div className="center-loader"><CircularProgress size={200}/></div>;
        }

        if (this.props.movies.length > 0) {
            list = <List movies={this.props.movies}/>;
        }

        return (
            <div className="relative-block">
                <FormControl fullWidth>
                    <Input
                        id="adornment-amount"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </FormControl>
                {list}
            </div>
        )
    }
}

const mapStateToProps = states => {
    return {
        movies: (oldQuery !== '') ? states.search.movies.data :  states.movie.movies.data,
        upToDate: states.search.movies.upToDate ||states.movie.movies.upToDate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        search: (query) => dispatch(searchAction.search(query)),
        onInitPeople: () => dispatch(movieAction.initMovieListRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)