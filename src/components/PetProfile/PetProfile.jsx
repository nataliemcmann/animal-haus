import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function PetProfile () {
    //declare dispatch
    dispatch = useDispatch();
    //subscribe to singlePetReducer
    const singlePetReducer = useSelector(store => store.singlePetReducer);
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
        <h2>{singlePetReducer.name}</h2>
    )
}

export default PetProfile;