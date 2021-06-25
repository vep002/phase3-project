import React, {Component} from 'react';
import PlantsContainer from '../components/PlantsContainer';
import NewPlantForm from './NewPlantForm';

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
        let {name, plants, id} = this.props.garden
        return (
            <section className="garden">
                <Link to={`/gardens/${id}`}>
                    <h2>{name}</h2>
                </Link>
                {
                        this.state.show 
                        ?
                        <PlantsContainer plants={plants} deletePlantFromState={this.props.deletePlantFromState} />
                        :
                        null
                }
                <button onClick={this.toggleClick}> Show/Hide Plants
                </button>
                < NewPlantForm gardens={this.props.gardens} addPlantToGarden={this.props.addPlantToGarden}/>
            </section>
        )
    }
}

export default Garden;