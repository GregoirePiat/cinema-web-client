import React from 'react';
import TextField from 'material-ui/TextField';
import {DatePicker} from 'material-ui-pickers'
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
const style = {
    width: "100%"
};


export default (props) => (
    <form>
        <Grid container alignItems="flex-start" direction="row" justify="center" spacing={40}>
            <Grid item xs={12} md={3} sm={6}>
                <div>
                    <TextField
                        id="title"
                        label="Nom"
                        value={props.title}
                        onChange={props.handleChange('title')}
                        margin="normal"
                        style={style}
                    />
                </div>
                <div>
                    <Typography type="caption">
                        Date de sortie
                    </Typography>
                    <DatePicker
                        value={props.releaseDate}
                        onChange={(value) => props.handleChange('releaseDate')({
                            target: {
                                value: value
                            }
                        })}
                        style={style}
                    />
                </div>
                <div>
                    <TextField
                        id="duration"
                        label="Durée"
                        type="number"
                        value={props.duration}
                        onChange={props.handleChange('duration')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        style={style}
                    />
                </div>
            </Grid>

            <Grid item xs={12} md={3} sm={6}>
                <div>
                    <TextField
                        id="income"
                        label="Revenue"
                        type="income"
                        value={props.income}
                        onChange={props.handleChange('income')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        style={style}
                    />
                </div>
                <div>
                    <TextField
                        id="budget"
                        label="Budget"
                        type="number"
                        value={props.budget}
                        onChange={props.handleChange('budget')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        style={style}
                    />
                </div>
            </Grid>
        </Grid>




    </form>
);
