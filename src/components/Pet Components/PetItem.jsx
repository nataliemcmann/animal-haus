import React from 'react';

function PetItem({ pet }) {

    return (
        <>
            <h3>{pet.name}</h3>
            <p>Food Details: {pet.cupsPerFeed} cup of {pet.foodDesc}</p>
            {pet.exerciseMin && (
            <p>Exercise Details: {pet.exerciseMin} of the following: {pet.exerciseDesc}</p>
            )
            }
        </>
    )
}

export default PetItem;