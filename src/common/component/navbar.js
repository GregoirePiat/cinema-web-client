import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {NavLink} from 'react-router-dom';

export default (props) => (
    <AppBar position="static">
        <Toolbar>
            <Typography component={NavLink} to="/" type="title" color="inherit" className='flex'>
                Cinema
            </Typography>

            {props.children}
        </Toolbar>
    </AppBar>
);

