import React, { Component } from 'react';
import './PersonContainer.css';
import Paper from 'material-ui/Paper';
import Actors from '../component/people/People';
import Actor from '../component/person/Person';
import {Switch, Route, Redirect} from "react-router-dom"
import AddPerson from "../component/person/form/Form";



class PersonContainer extends Component {

    render() {
        return (
            <Paper>
                <Switch>
                    <Route path={this.props.match.url + '/new'} component={AddPerson}/>
                    <Route path={this.props.match.url + '/:id'} component={Actor}/>
                    <Route path={this.props.match.url} component={Actors}/>
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>
            </Paper>
        );
    }
}



export default PersonContainer;
