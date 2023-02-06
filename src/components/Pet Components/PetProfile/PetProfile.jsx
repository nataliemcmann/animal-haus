import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//components
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';

function PetProfile () {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to singlePetReducer
    const pets = useSelector(store => store.pets);
    //grab id from route parameter
    let { id } = useParams();

    //fetch a pet's details on page load
    useEffect(() => {
        console.log(id);
        dispatch({
            type: 'FETCH_PET_DETAILS',
            payload: id
        });
    }, [])

    return (
        <div>
            <DeleteButton className="petDelete" pet={pets.singlePetReducer}/>
            <h2>Here is {pets.singlePetReducer && pets.singlePetReducer.name}</h2>
        </div> 
    )
}

export default PetProfile;