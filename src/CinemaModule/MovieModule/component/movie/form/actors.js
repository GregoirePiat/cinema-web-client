import React from 'react';
import {FormControl} from 'material-ui/Form';
import {MenuItem} from 'material-ui/Menu';
import Input, {InputLabel} from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import ListActorEdit from './listActorEdit'

const style = {
    width: "100%"
};


const convertValue = (value) => ({target: {value: {id: value}}});
export default (props) => (
    <form>
        <Grid container alignItems="flex-start" direction="row" justify="center" spacing={40}>
            <Grid item xs={12} md={4} sm={5}>
                <TextField
                    id="role"
                    label="Nom de role"
                    type="role"
                    value={props.actor.role}
                    onChange={props.handleChange('role')}
                    style={style}
                />
            </Grid>
            <Grid item xs={12} md={4} sm={5}>
                <FormControl style={style}>
                    <InputLabel htmlFor="name-multiple">Personne</InputLabel>
                    <Select
                        value={props.actor.id || 1}
                        onChange={(event) => props.handleChange('id')(convertValue(event.target.value))}
                        input={<Input name="category-id" id="category-id"/>}
                    >
                        {props.people.map(person => (
                            <MenuItem
                                key={person.id}
                                value={person.id}
                            >
                                {person.firstname + ' ' + person.lastname}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
                <Button raised disabled={props.actor.role.length === 0}
                        color="primary" style={{margin: '10px'}}
                        onClick={() => props.handleAddActor(props.people.find(
                            (people) => people.id === props.actor.id
                        ), props.actor.role)
                        }>
                    Ajouter
                </Button>
            </Grid>


            <Grid item xs={12}>
                <Typography type="headline" component="h2">
                    Les acteurs :
                </Typography>
                <ListActorEdit actors={props.actors} handleRemoveActor={props.handleRemoveActor}/>
            </Grid>

        </Grid>
    </form>
);
