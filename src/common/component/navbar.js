import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export default (props) =>(
    <AppBar position="static">
        <Toolbar>
            <Typography type="title" color="inherit" className='flex'>
                Cinema
            </Typography>
            {props.children}
        </Toolbar>
    </AppBar>
);

