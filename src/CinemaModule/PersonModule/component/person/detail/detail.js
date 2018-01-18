import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import moment from 'moment'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "material-ui";
import TodayIcon from 'material-ui-icons/Today';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import {NavLink,withRouter} from "react-router-dom";
import ListMovie from './listMovie'




export default withRouter((props) => {
    if (!props.person) {
        return null;
    }
    const personFullName = props.person.firstname + ' ' + props.person.lastname;
    console.log(props);
    return (
        <div className="relative-block">
            <div className="top-position">
                <Button component={NavLink} to={props.location.pathname + '/edit'} fab mini color="primary" aria-label="edit" >
                    <ModeEditIcon/>
                </Button>
                <Button fab mini  color="accent" aria-label="edit" onClick={props.delete}>
                    <DeleteIcon/>
                </Button>
            </div>
            <div className="margin-top-bot">
                <Typography type="headline" component="h1" align='center' >
                    {personFullName}
                </Typography>
            </div>

            <Divider/>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <TodayIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary={'Date de naissance: ' + moment(props.person.birthDate).format('DD/MM/YYYY')}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <TodayIcon/>
                    </ListItemIcon>
                    <ListItemText inset primary={'Date de déces: ' + moment(props.person.deathDate).format('DD/MM/YYYY')}/>
                </ListItem>
            </List>
            <Divider/>
            <Typography type="headline" component="h2" align='center'>
                Les roles :
            </Typography>
            <Divider/>
            <ListMovie movies={props.person.movies}/>
        </div>
    );
})

