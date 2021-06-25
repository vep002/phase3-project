import React, {Component} from 'react';
import PlantsContainer from '../components/PlantsContainer';

import {Link} from 'react-router-dom'

class Garden extends Component {

    state = {
        show: false
    }

    toggleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let {name, plants, id} = this.props.Garden
        return (
            <section className="garden">
                <Link to={`/gardens/${id}`}>
                    <h2>{name}</h2>
                </Link>
                <button onClick={toggleClick}>
                    {
                        this.state.show 
                        ?
                        <PlantsContainer plants={plants} deletePlantFromState={this.props.deleteAssignmentFromState} />
                        :
                        null
                    }
                </button>
                <button className="add-plant">add new plant</button>
            </section>
        )
    }
}

export default Garden;