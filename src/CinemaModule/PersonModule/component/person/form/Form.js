import React, {Component} from "react";
import validator from '../../../../../common/utils/validation';
import {connect} from "react-redux";
import * as personAction from "../../../store/actions";
import { withRouter  } from 'react-router-dom'
import {Divider, Typography, Button, Grid, TextField} from "material-ui";
import {DatePicker} from "material-ui-pickers";

const style = {
    width: '100%'
};

const margin = {
    width: '100%',
    paddingTop:'16px',
    paddingBottom:'8px'
};

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
        console.log("handle change", name, event.target.value);
        this.setState({
            ...this.state,
            person: {
                ...this.state.person,
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
        this.props.history.push('/actors')

    };


    render() {
        const validation = this.propertiesIsValid(this.state.person);
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
                                label="Prenom"
                                value={this.state.person.firstname}
                                onChange={this.handleChange('firstname')}
                                margin="normal"
                                style={style}
                            />
                        </div>
                        <div>
                            <TextField
                                id="title"
                                label="Nom"
                                value={this.state.person.lastname}
                                onChange={this.handleChange('lastname')}
                                margin="normal"
                                style={style}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={10} md={4} sm={5}>
                        <div style={margin}>
                            <Typography type="caption">
                                Date de naissance
                            </Typography>
                            <DatePicker
                                value={this.state.person.birthDate}
                                onChange={(value) => this.handleChange('birthDate')({
                                    target: {
                                        value: value
                                    }
                                })}
                                style={style}
                            />
                        </div>
                        <div style={margin}>
                            <Typography type="caption">
                                Date de déces
                            </Typography>
                            <DatePicker
                                value={this.state.person.deathDate}
                                onChange={(value) => this.handleChange('deathDate')({
                                    target: {
                                        value: value
                                    }
                                })}
                                style={style}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <div className="margin-top-bot">
                            <Button raised color="primary" onClick={this.submitForm} disabled={!validation.valid}>
                                Valider
                            </Button>
                        </div>
                    </Grid>
                </Grid>



            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        savePerson: (person) => dispatch(personAction.savePersonRequest(person))
    };
};

export default connect(null,mapDispatchToProps)(withRouter(PersonForm));
