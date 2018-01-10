import React from 'react';
import {FormControl} from 'material-ui/Form';
import {MenuItem} from 'material-ui/Menu';
import Input, {InputLabel} from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select';
const style = {
    width: "100%"
};


const convertValue = (value) => ({target:{value:{id:value}}});
export default (props) => (
    <form>
        <Grid container alignItems="flex-start" direction="row" justify="center" spacing={40}>
            <Grid item xs={12} md={4} sm={8}>
                <FormControl style={style}>
                    <InputLabel htmlFor="name-multiple">Categorie</InputLabel>
                    <Select
                        value={props.category.id}
                        onChange={(event)=> props.handleChange('category')(convertValue(event.target.value))}
                        input={<Input name="category-id" id="category-id"/>}
                    >
                        {props.categories.map(category => (
                            <MenuItem
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </form>
);
