import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actorAction from "../../store/actions";
import {CircularProgress} from 'material-ui/Progress';
import Detail from './detail/detail';




class Actor extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getMovieByIdRequest(this.props.match.params.id);
        }
    }


    render() {

        let person = <div className="center-loader"><CircularProgress  size={200}/></div>;

        if (this.props.person) {
            person = (
               <Detail person={this.props.person} />
            )
        }

        return person;
    }
}

const mapStateToProps = states => {
    return {
        person: states.person.person
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getMovieByIdRequest: (id) => dispatch(actorAction.getPersonByIdRequest(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor)
