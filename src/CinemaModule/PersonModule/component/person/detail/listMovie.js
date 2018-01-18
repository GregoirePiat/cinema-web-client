import React from 'react';
import LocalMovies from 'material-ui-icons/LocalMovies';
import {Link} from 'react-router-dom';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from 'material-ui/List';

const itemBuilder = (movie) => {

    return (
        <Link className="no-link-style" to={ '/movies/' + movie.id.movieId} key={movie.id.personId + '-' + movie.id.movieId} >
            <ListItem button>
                <ListItemIcon>
                    <LocalMovies/>
                </ListItemIcon>
                <ListItemText
                    primary={movie.role}
                    secondary={movie.movie.title}
                />
            </ListItem>
        </Link>
    )
};


const list = (props) => (<List>{props.movies.map(itemBuilder)}</List>);

export default list;