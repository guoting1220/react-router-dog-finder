import React from 'react';
import { useParams } from "react-router-dom";
import DogDetails from './DogDetails';


const FilterDogDetails = ({ dogs }) => {
    const { name } = useParams();
    if (name) {
        const dog = dogs.find(dog => dog.name === name);
        if(dog) {
            return (
                <DogDetails dog={dog}/>
            )
        }
    }        
    return null;
}

export default FilterDogDetails;