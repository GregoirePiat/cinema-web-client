import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import moment from 'moment';
import ListActor from './listActor';


export default (props) => (
    <div>
        <Typography type="headline" component="h1" align='center'>
            {props.movie.title}
        </Typography>
        <Divider/>
        <ul>
            <li>duration: {props.movie.duration}</li>
            <li>releaseDate: {moment(props.movie.releaseDate).format('dd/MM/yyyy')}</li>
            <li>budget: {props.movie.budget}</li>
            <li>income: {props.movie.income}</li>
        </ul>
        <Divider/>
        <Typography type="headline" component="h2" align='center'>
            Les acteurs :
        </Typography>
        <Divider/>
        <ListActor actors={props.movie.actors} />

    </div>
);

