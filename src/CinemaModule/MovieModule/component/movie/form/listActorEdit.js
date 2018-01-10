import React from 'react';
import LocalMovies from 'material-ui-icons/LocalMovies';
import Delete from 'material-ui-icons/Delete';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    ListItemSecondaryAction
} from 'material-ui';

const itemBuilder = (actor,props) => {
    let actorFullName = actor.person.firstname + ' ' + actor.person.lastname;

    return (
        <ListItem button key={actor.id.personId + '-' + actor.id.movieId} >
            <ListItemIcon>
                <LocalMovies/>
            </ListItemIcon>
            <ListItemText
                primary={actor.role}
                secondary={actorFullName}
            />
            <ListItemSecondaryAction>
                <IconButton aria-label="Comments" onClick={() => props.handleRemoveActor(actor)}>
                    <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};


const list = (props) => (<List>{props.actors.map((actor) => itemBuilder(actor,props))}</List>);

export default list;