import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actorAction from "../../store/actions";
import {CircularProgress} from 'material-ui/Progress';
import Detail from './detail/detail';
import Form from './form/Form';
import {Redirect, Route, Switch} from "react-router-dom";




class Category extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getCategoryByIdRequest(this.props.match.params.id);
        }
    }

    delete = () => {
        this.props.deleteCategoryByIdRequest(this.props.category.id);
        this.props.history.push('/categories');
    };


    render() {

        let person = <div className="center-loader"><CircularProgress  size={200}/></div>;

        if (this.props.category) {
            person = (
                <Switch>
                    <Route path={this.props.match.url + '/edit'} component={() => <Form category={this.props.category}/>} />
                    <Route path={this.props.match.url} component={() => <Detail category={this.props.category} delete={this.delete}/>}/>
                    <Redirect from={this.props.match.url} to={this.props.match.url} />
                </Switch>

            )
        }

        return person;
    }
}

const mapStateToProps = states => {
    return {
        category: states.category.category
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getCategoryByIdRequest: (id) => dispatch(actorAction.getCategoryByIdRequest(id)),
        deleteCategoryByIdRequest: (id) => dispatch(actorAction.deleteCategoryByIdRequest(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category)
