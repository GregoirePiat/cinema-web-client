import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import moment from 'moment'


export default (props) => {
    if(!props.person) {
        return null;
    }
    const personFullName = props.person.firstname + ' ' + props.person.lastname;

    return(<div>
        <Typography type="headline" component="h1" align='center'>
            {personFullName}
        </Typography>
        <Divider/>
        <ul>
            <li>Date de naissance: {moment(props.person.birthDate).format('DD/MM/YYYY')}</li>
            <li>Date de sortie: {moment(props.person.deathDate).format('DD/MM/YYYY')}</li>
        </ul>
        <Divider/>
    </div>
);
}

