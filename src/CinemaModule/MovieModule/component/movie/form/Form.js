import React, {Component} from "react";
import PropertiesForm from './properties';
import CategoryForm from './categories';
import ActorsForm from './actors';
import validator from '../../../../../common/utils/validation';
import * as personAction from "../../../../PersonModule/store/actions";
import * as categorieAction from "../../../../CategoryModule/store/actions";
import * as movieAction from "../../../../MovieModule/store/actions";
import {connect} from "react-redux";
import { withRouter  } from 'react-router-dom'
import {Divider, Typography, Button, Stepper, Step, StepLabel} from "material-ui";

class MovieForm extends Component {
    state = {
        activeStep: 0,
        completedSteps: [false, false, false],
        movie: {
            title: '',
            duration: 0,
            budget: 0,
            income: 0,
            releaseDate: new Date(),
            category: {
                id:0
            },
            director:{
                id:0
            },
            actors:[]
        },
        actor: {
            id:0,
            role:''
        }

    };

    steps = [
        {label: "Saisie des proriétés du film", optional: false, validate: (movie) => this.propertiesIsValid(movie)},
        {label: "Catégorie et directeurs", optional: false, validate: (movie) => this.categoryIsValid(movie)},
        {label: "Ajout des acteurs", optional: true, validate: () => ({valid:true})}
    ];

    componentDidMount() {
        if (this.props.movie) {
            this.setState((prevState, props) => {
                return {
                    ...this.state,
                    movie: props.movie
                };
            });
        }
        if (!this.props.categoriesUpToDate || !(this.props.categories.length > 0)) {
            this.props.onInitCategoryList();
        }
        if (!this.props.peopleUpToDate || !(this.props.people.length > 0)) {
            this.props.onInitPersonList();
        }
    }

    componentDidUpdate() {
        if (!this.props.categoriesUpToDate) {
            this.props.onInitCategoryList();
        }
        if (!this.props.peopleUpToDate) {
            this.props.onInitPersonList();
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

    handleChangeActor = name => event => {
        console.log("handle change", name, event);
        this.setState({
            ...this.state,
            actor: {
                ...this.state.actor,
                [name]: event.target.value
            }
        })
    };

    handleAddActor = (person,role) => {
        if(this.state.movie.actors.filter(actor => actor.id.personId === person.id).length > 0)
            return;
        const actors = [...this.state.movie.actors];
        console.log(person,role);
        const movie = {
            ...this.state.movie,
            actors:actors
        };
        actors.push({
            id:{
                personId:person.id,
                movieId:this.state.movie.id
            },
            person:person,
            movie:this.state.movie,
            role:role
        });
        this.setState({
            ...this.state,
            movie
        });
    };

    handleRemoveActor = (deleteActor) => {
        this.setState({
            ...this.state,
            movie: {
                ...this.state.movie,
                actors:this.state.movie.actors.filter((actor) => actor.id.personId !== deleteActor.id.personId)
            }
        });
    };


    propertiesIsValid = (movie) => {
        return validator(movie, {
            title: ['required'],
            duration: ['required', 'number'],
            budget: ['required', 'number'],
            income: ['required', 'number'],
        });
    };

    categoryIsValid = (movie) => {
        return validator(movie.category, {
            id: ['required', 'number'],
        });
    };

    handleNext = () => {
        if (this.state.activeStep === this.steps.length - 1) {
            this.submitForm();
        } else {
            const completedSteps = [...this.state.completedSteps];
            completedSteps[this.state.activeStep] = true;
            this.setState({
                completedSteps: completedSteps,
                activeStep: this.state.activeStep + 1
            });
        }
    };

    handleBack = () => {
        if (this.state.activeStep > 0) {
            this.setState({
                activeStep: this.state.activeStep - 1
            });
        }
    };

    submitForm = () => {
        this.props.saveMovie(this.state.movie);
        this.props.history.push('/movies')

    };

    stepContent(index) {
        switch (index) {
            case 0:
                return <PropertiesForm
                    handleChange={this.handleChange}
                    duration={this.state.movie.duration}
                    title={this.state.movie.title}
                    budget={this.state.movie.budget}
                    income={this.state.movie.income}
                    releaseDate={this.state.movie.releaseDate}
                />;
            case 1:
                return <CategoryForm
                    handleChange={this.handleChange}
                    director={this.state.movie.director}
                    people={this.props.people}
                    category={this.state.movie.category}
                    categories={this.props.categories}
                />;
            case 2:
                return <ActorsForm
                    handleChange={this.handleChangeActor}
                    actors={this.state.movie.actors}
                    actor={this.state.actor}
                    people={this.props.people}
                    handleAddActor={this.handleAddActor}
                    handleRemoveActor={this.handleRemoveActor}
                />;
            default:
                return null;
        }
    }

    render() {
        const optional = <Typography type="caption">Optional</Typography>;
        const steps = this.steps;
        const activeStep = this.state.activeStep;
        const validation = steps[activeStep].validate(this.state.movie);
        return (
            <div>
                <div className="margin-top-bot">
                    <Typography type="headline" component="h2" align="center">
                        {(this.props.movie) ? 'Edition du film' : 'Création du film'}
                    </Typography>
                </div>


                <Divider/>
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index} completed={this.state.completedSteps[index]}>
                            <StepLabel optional={step.optional ? optional : false}>{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {this.stepContent(activeStep)}

                <div className="margin-top-bot">
                    <Button
                        disabled={!(activeStep > 0)}
                        onClick={this.handleBack}
                    >
                        Back
                    </Button>
                    <Button raised color="primary" onClick={this.handleNext} disabled={!validation.valid}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = states => {
    return {
        categories: states.category.categories.data,
        people: states.person.people.data,
        categoriesUpToDate: states.category.categories.upToDate,
        peopleUpToDate: states.person.people.upToDate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitCategoryList: () => dispatch(categorieAction.initCategoryListRequest()),
        onInitPersonList: () => dispatch(personAction.initPersonListRequest()),
        saveMovie: (movie) => dispatch(movieAction.saveMovieRequest(movie))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieForm));
