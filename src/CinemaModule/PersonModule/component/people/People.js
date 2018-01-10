import React, {Component} from 'react';
import {connect} from "react-redux";
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {CircularProgress} from 'material-ui/Progress';
import * as actorAction from "../../store/actions";
import List from './list';




class Actors extends Component {

    componentDidMount() {
        if (!this.props.people.upToDate || !(this.props.people.length > 0)) {
            this.props.onInitMovies();
        }
    }



    render() {

        let list = <div className="center-loader"><CircularProgress  size={200}/></div>;

        if (this.props.people.length > 0) {
            list = <List actors={this.props.people} />
        }

        return (
            <div>
                <Typography type="headline" component="h1" align='center'>
                    Liste des acteurs
                </Typography>
                <Divider/>
                {list}
            </div>
        )
    }
}

const mapStateToProps = states => {
    return {
        people: states.person.people.data,
        upToDate: states.person.people.upToDate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitMovies: () => dispatch(actorAction.initPersonListRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Actors)