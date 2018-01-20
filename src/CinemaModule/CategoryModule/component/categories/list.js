import React from 'react';
import LocalMovies from 'material-ui-icons/LocalMovies';
import {Link} from 'react-router-dom';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from 'material-ui/List';


const itemBuilder = (category) => {



    return (
        <Link className="no-link-style" to={ '/categories/' + category.id} key={category.id} >
            <ListItem button>
                <ListItemIcon>
                    <LocalMovies/>
                </ListItemIcon>
                <ListItemText
                    primary={category.name}
                />
            </ListItem>
        </Link>
    )
};


const list = (props) => (<List>{props.categories.map(itemBuilder)}</List>);
export default list;