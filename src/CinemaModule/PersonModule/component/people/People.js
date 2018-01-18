import React, {Component} from 'react';
import {connect} from "react-redux";
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {CircularProgress} from 'material-ui/Progress';
import * as actorAction from "../../store/actions";
import List from './list';
import AddIcon from 'material-ui-icons/Add';
import {Button} from "material-ui";





class Actors extends Component {

    componentDidMount() {
        if (!this.props.upToDate || !(this.props.people.length > 0)) {
            this.props.onInitPeople();
        }
    }


    componentDidUpdate() {
        if (!this.props.upToDate) {
            this.props.onInitPeople();
        }
    }




    render() {
        let list = <p>Aucun acteur disponnible</p>
        if(!this.props.upToDate) {
            list = <div className="center-loader"><CircularProgress  size={200}/></div>;
        }


        if (this.props.people.length > 0) {
            list = <List people={this.props.people} />
        }

        return (
            <div className="relative-block">
                <div className="top-position">
                    <Button fab mini color="primary" aria-label="edit" >
                        <AddIcon/>
                    </Button>
                </div>
                <div className="margin-top-bot">
                    <Typography type="headline" component="h1" align='center'>
                        Liste des acteurs
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
        people: states.person.people.data,
        upToDate: states.person.people.upToDate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onInitPeople: () => dispatch(actorAction.initPersonListRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Actors)