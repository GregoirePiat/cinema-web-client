import React, { Component } from 'react';
import './CategoryContainer.css';
import Paper from 'material-ui/Paper';
import Categories from '../component/categories/Categories';
import Category from '../component/category/Category';
import {Switch, Route, Redirect} from "react-router-dom"
import AddCategory from "../component/category/form/Form";



class PersonContainer extends Component {

    render() {
        return (
            <Paper>
                <Switch>
                    <Route path={this.props.match.url + '/new'} component={AddCategory}/>
                    <Route path={this.props.match.url + '/:id'} component={Category}/>
                    <Route path={this.props.match.url} component={Categories}/>
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>
            </Paper>
        );
    }
}



export default PersonContainer;
