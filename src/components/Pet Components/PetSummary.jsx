import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import PetItem from './PetItem';
//mui components

function PetSummary() {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to pets reducer
    const pets = useSelector(store => store.pets);

    //fetch all pet details upon page load
    useEffect(() => {
        dispatch({
            type: 'FETCH_PETS'
        });
    }, []);



    return (
        <>
            <h3>Household Pet List</h3>
            <div>
                {pets.petsReducer && pets.petsReducer.map((pet) => {
                    return <PetItem key={pet.id} pet={pet}/>
                })}
            </div>
        </>
    )
}

export default PetSummary;