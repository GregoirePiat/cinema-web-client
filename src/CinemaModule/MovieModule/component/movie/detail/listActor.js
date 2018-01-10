import React from 'react';
import LocalMovies from 'material-ui-icons/LocalMovies';
import {Link} from 'react-router-dom';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from 'material-ui/List';

const itemBuilder = (actor) => {
    let actorFullName = actor.person.firstname + ' ' + actor.person.lastname;

    return (
        <Link className="no-link-style" to={ '/actors/' + actor.id.personId} key={actor.id.personId + '-' + actor.id.movieId} >
            <ListItem button>
                <ListItemIcon>
                    <LocalMovies/>
                </ListItemIcon>
                <ListItemText
                    primary={actor.role}
                    secondary={actorFullName}
                />
            </ListItem>
        </Link>
    )
};


const list = (props) => (<List>{props.actors.map(itemBuilder)}</List>);

export default list;