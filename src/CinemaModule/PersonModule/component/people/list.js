import React from 'react';
import LocalMovies from 'material-ui-icons/LocalMovies';
import {Link} from 'react-router-dom';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from 'material-ui/List';
import moment from 'moment'


const itemBuilder = (person) => {

    const actorFullName = person.firstname + ' ' + person.lastname;
    const date = moment(person.birthDate).format('DD/MM/YYYY') + ' - ' +  moment(person.deathDate).format('DD/MM/YYYY');


    return (
        <Link className="no-link-style" to={ '/actors/' + person.id} key={person.id} >
            <ListItem button>
                <ListItemIcon>
                    <LocalMovies/>
                </ListItemIcon>
                <ListItemText
                    primary={actorFullName}
                    secondary={date}
                />
            </ListItem>
        </Link>
    )
};


const list = (props) => (<List>{props.people.map(itemBuilder)}</List>);
export default list;