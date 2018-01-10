import React from 'react';
import LocalMovies from 'material-ui-icons/LocalMovies';
import {Link} from 'react-router-dom';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from 'material-ui/List';

const itemBuilder = (movie) => {
    let directorFullName = 'Unknown';
    if (movie.director) {
        directorFullName = movie.director.firstname + ' ' + movie.director.lastname;
    }
    return (
        <Link className="no-link-style" to={ '/movies/' + movie.id} key={movie.id} >
            <ListItem button>
                <ListItemIcon>
                    <LocalMovies/>
                </ListItemIcon>
                <ListItemText
                    primary={movie.title}
                    secondary={directorFullName}
                />
            </ListItem>
        </Link>
    )
};


const list = (props) => (<List>{props.movies.map(itemBuilder)}</List>);

export default list;