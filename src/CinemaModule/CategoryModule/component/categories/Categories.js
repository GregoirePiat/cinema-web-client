import React, {Component} from 'react';
import {connect} from "react-redux";
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {CircularProgress} from 'material-ui/Progress';
import * as actorAction from "../../store/actions";
import List from './list';
import AddIcon from 'material-ui-icons/Add';
import {Button} from "material-ui";
import {NavLink} from "react-router-dom";





class Categories extends Component {

    componentDidMount() {
        if (!this.props.upToDate || !(this.props.categories.length > 0)) {
            this.props.initCategoryListRequest();
        }
    }


    componentDidUpdate() {
        if (!this.props.upToDate) {
            this.props.initCategoryListRequest();
        }
    }




    render() {
        let list = <p>Aucune categorie disponnible</p>;
        if(!this.props.upToDate) {
            list = <div className="center-loader"><CircularProgress  size={200}/></div>;
        }


        if (this.props.categories.length > 0) {
            list = <List categories={this.props.categories} />
        }

        return (
            <div className="relative-block">
                <div className="top-position">
                    <Button fab mini color="primary" aria-label="edit" component={NavLink} to={this.props.location.pathname + '/new'}>
                        <AddIcon/>
                    </Button>
                </div>
                <div className="margin-top-bot">
                    <Typography type="headline" component="h1" align='center'>
                        Liste des categories
                    </Typography>
                </div>
                <Divider/>
                {list}
            </div>
        )
    }
}

const mapStateToProps = states => {
    return {
        categories: states.category.categories.data,
        upToDate: states.category.categories.upToDate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        initCategoryListRequest: () => dispatch(actorAction.initCategoryListRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)