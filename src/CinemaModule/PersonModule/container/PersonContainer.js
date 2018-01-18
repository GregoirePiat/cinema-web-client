import React, { Component } from 'react';
import './PersonContainer.css';
import Paper from 'material-ui/Paper';
import Actors from '../component/people/People';
import Actor from '../component/person/Person';
import {Switch, Route, Redirect} from "react-router-dom"



class PersonContainer extends Component {

    render() {
        return (
            <Paper>
                <Switch>
                    <Route path={this.props.match.url + '/:id'} component={Actor}/>
                    <Route path={this.props.match.url} component={Actors}/>
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>
            </Paper>
        );
    }
}



export default PersonContainer;
