import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {Button} from "material-ui";
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import {NavLink,withRouter} from "react-router-dom";
import ListMovie from '../../../../MovieModule/component/movies/list'




export default withRouter((props) => {
    if (!props.category) {
        return null;
    }

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
                    {props.category.name}
                </Typography>
            </div>
            <Divider/>
            <ListMovie movies={props.category.movies}/>
        </div>
    );
})

