import React, {Component} from 'react';
import './Layout.css';
import MovieContainer from "../../CinemaModule/MovieModule/container/MovieContainer";
import ActorContainer from "../../CinemaModule/PersonModule/container/PersonContainer";
import CategoryContainer from "../../CinemaModule/CategoryModule/container/CategoryContainer";
import Navbar from "../component/navbar";
import Button from 'material-ui/Button';

import {Switch, Route, Redirect, NavLink} from "react-router-dom"


class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Navbar>
                    <Button component={NavLink} to="/movies" color="contrast">Film</Button>
                    <Button component={NavLink} to="/actors"  color="contrast">Acteur</Button>
                    <Button component={NavLink} to="/categories" color="contrast">Categorie</Button>
                </Navbar>
                <div className='container'>
                    <Switch>
                        <Route path="/movies" component={MovieContainer}/>
                        <Route path="/actors" component={ActorContainer}/>
                        <Route path="/categories" component={CategoryContainer}/>
                        <Redirect from="/" to="/movies" />
                    </Switch>

                </div>
            </div>
        );
    }
}

export default Layout;
