import React, {Component} from "react";
import validator from '../../../../../common/utils/validation';
import {connect} from "react-redux";
import * as categoryAction from "../../../store/actions";
import { withRouter  } from 'react-router-dom'
import {Divider, Typography, Button, Grid, TextField} from "material-ui";

const style = {
    width: '100%'
};

class CategoryForm extends Component {
    state = {
       category:{
           name:'',
       }
    };


    componentDidMount() {
        if (this.props.category) {
            this.setState((prevState, props) => {
                return {
                    ...this.state,
                    category: props.category
                };
            });
        }
    }

    handleChange = name => event => {
        console.log("handle change", name, event.target.value);
        this.setState({
            ...this.state,
            category: {
                ...this.state.category,
                [name]: event.target.value
            }
        })
    };

    propertiesIsValid = (person) => {
        return validator(person, {
            name: ['required']
        });
    };




    submitForm = () => {
        this.props.saveCategoryRequest(this.state.category);
        this.props.history.push('/categories');
    };


    render() {
        const validation = this.propertiesIsValid(this.state.category);
        return (
            <div>
                <div className="margin-top-bot">
                    <Typography type="headline" component="h2" align="center">
                        {(this.props.category) ? 'Edition de categorie' : 'Création de categorie'}
                    </Typography>
                </div>
                <Divider/>
                <Grid container alignItems="flex-start" direction="row" justify="center" spacing={40}>
                    <Grid item xs={9} md={4} sm={4}>
                        <div>
                            <TextField
                                id="name"
                                label="Nom"
                                value={this.state.category.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                style={style}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={10} md={2} sm={2}>
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
        saveCategoryRequest: (person) => dispatch(categoryAction.saveCategoryRequest(person))
    };
};

export default connect(null,mapDispatchToProps)(withRouter(CategoryForm));
