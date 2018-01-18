import React, {Component} from "react";
import validator from '../../../../../common/utils/validation';
import * as personAction from "../../../../PersonModule/store/actions";
import {connect} from "react-redux";
import { withRouter  } from 'react-router-dom'
import {Divider, Typography, Button, Grid, TextField} from "material-ui";
import {DatePicker} from "material-ui-pickers";

class PersonForm extends Component {
    state = {
       person:{
           firstname:'',
           lastname:'',
           birthDate: new Date(),
           deathDate: new Date()
       }
    };


    componentDidMount() {
        if (this.props.person) {
            this.setState((prevState, props) => {
                return {
                    ...this.state,
                    person: props.person
                };
            });
        }
    }

    handleChange = name => event => {
        console.log("handle change", name, event);
        this.setState({
            ...this.state,
            movie: {
                ...this.state.movie,
                [name]: event.target.value
            }
        })
    };

    propertiesIsValid = (person) => {
        return validator(person, {
            firstname: ['required'],
            lastname: ['required']
        });
    };




    submitForm = () => {
        this.props.savePerson(this.state.person);
        this.props.history.push('/movies')

    };


    render() {
        const validation = this.propertiesIsValid(this.state.movie);
        return (
            <div>
                <div className="margin-top-bot">
                    <Typography type="headline" component="h2" align="center">
                        {(this.props.person) ? 'Edition d\'acteur' : 'Création du film'}
                    </Typography>
                </div>
                <Divider/>
                <Grid container alignItems="flex-start" direction="row" justify="center" spacing={40}>
                    <Grid item xs={10} md={4} sm={5}>
                        <div>
                            <TextField
                                id="title"
                                label="Nom"
                                value={this.props.person.firstname}
                                onChange={this.handleChange('firstname')}
                                margin="normal"
                                style={style}
                            />
                        </div>
                        <div>
                            <TextField
                                id="title"
                                label="Nom"
                                value={this.props.person.lastname}
                                onChange={this.handleChange('lastname')}
                                margin="normal"
                                style={style}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={10} md={4} sm={5}>
                        <div>
                            <Typography type="caption">
                                Date de naissance
                            </Typography>
                            <DatePicker
                                value={this.props.person.birthDate}
                                onChange={(value) => this.handleChange('birthDate')({
                                    target: {
                                        value: value
                                    }
                                })}
                                style={style}
                            />
                        </div>
                        <div>
                            <Typography type="caption">
                                Date de déces
                            </Typography>
                            <DatePicker
                                value={this.props.person.deathDate}
                                onChange={(value) => this.handleChange('deathDate')({
                                    target: {
                                        value: value
                                    }
                                })}
                                style={style}
                            />
                        </div>
                    </Grid>
                </Grid>


                <div className="margin-top-bot">
                    <Button raised color="primary" onClick={this.submitForm} disabled={!validation.valid}>
                        Valider
                    </Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        savePerson: (movie) => dispatch(personAction.savePerson(movie))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PersonForm));
