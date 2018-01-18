import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import moment from 'moment';
import ListActor from './listActor';
import {Button, List, ListItem, ListItemIcon, ListItemText} from "material-ui";
import ScheduleIcon from 'material-ui-icons/Schedule';
import TodayIcon from 'material-ui-icons/Today';
import EuroSymbolIcon from 'material-ui-icons/EuroSymbol';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import {NavLink,withRouter} from "react-router-dom";


export default withRouter((props) => (
    <div className="relative-block">
        <div className="top-position">
            <Button fab mini component={NavLink} to={props.location.pathname + '/edit'} color="primary" aria-label="edit" >
                <ModeEditIcon/>
            </Button>
            <Button fab mini  color="accent" aria-label="edit" onClick={props.delete} >
                <DeleteIcon/>
            </Button>
        </div>
        <div className="margin-top-bot">
            <Typography type="headline" component="h1" align='center' >
                {props.movie.title}
            </Typography>
        </div>

        <Divider/>
        <List>
            <ListItem>
                <ListItemIcon>
                    <ScheduleIcon/>
                </ListItemIcon>
                <ListItemText inset primary={props.movie.duration + ' minute'}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <TodayIcon/>
                </ListItemIcon>
                <ListItemText inset primary={moment(props.movie.releaseDate).format('DD/MM/YYYY')}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <EuroSymbolIcon/>
                </ListItemIcon>
                <ListItemText inset primary={props.movie.budget + ' € de budget'}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <EuroSymbolIcon/>
                </ListItemIcon>
                <ListItemText inset primary={props.movie.income + ' € de benefice'}/>
            </ListItem>
        </List>
        <Divider/>
        <Typography type="headline" component="h2" align='center'>
            Les acteurs :
        </Typography>
        <Divider/>
        <ListActor actors={props.movie.actors}/>

    </div>
));

