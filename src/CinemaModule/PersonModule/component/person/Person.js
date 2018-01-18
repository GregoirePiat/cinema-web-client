import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actorAction from "../../store/actions";
import {CircularProgress} from 'material-ui/Progress';
import Detail from './detail/detail';
import Form from './form/Form';
import {Redirect, Route, Switch} from "react-router-dom";




class Actor extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getPersonByIdRequest(this.props.match.params.id);
        }
    }

    delete = () => {
        this.props.deletePersonByIdRequest(this.props.person.id);
        this.props.history.push('/actors');
    };


    render() {

        let person = <div className="center-loader"><CircularProgress  size={200}/></div>;

        if (this.props.person) {
            person = (
                <Switch>
                    <Route path={this.props.match.url + '/edit'} component={() => <Form person={this.props.person}/>} />
                    <Route path={this.props.match.url} component={() => <Detail person={this.props.person} delete={this.delete}/>}/>
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>

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
        getPersonByIdRequest: (id) => dispatch(actorAction.getPersonByIdRequest(id)),
        deletePersonByIdRequest: (id) => dispatch(actorAction.deletePersonByIdRequest(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Actor)
