import React from 'react'
import Plant from './Plant'

export default function PlantsContainer(props) {

    let arrOfPlants = props.plants.map(plant => {
        return ( 
            <Plant 
                key={plant.id} 
                plant={plant} 
                deletePlantFromState={props.deletePlantFromState} 
            />
        )
    })

    return (
        <div>
            {arrOfPlants}
        </div>
    )
}