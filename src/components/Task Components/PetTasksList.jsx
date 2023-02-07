import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PetTasksList({ petID }) {
    const tasks = useSelector(store => store.pets);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_PET_TASKS',
            payload: petID
        });
    }, [])

    return(
        <>
            <ul>
                {tasks.taskPetReducer && tasks.taskPetReducer.map((task) => {
                    return <li>{task.taskDesc}</li>
                })}
            </ul>
        </>
    )
}

export default PetTasksList;