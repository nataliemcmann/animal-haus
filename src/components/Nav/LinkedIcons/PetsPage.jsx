import React from 'react';
import { useHistory } from 'react-router-dom';
//mui component
import PetsIcon from '@mui/icons-material/Pets';

function PetsPage() {
    const history = useHistory();

    const sendToPetSummary = () => {
        history.push('/petSummary')
    }

    return(
        <PetsIcon onClick={sendToPetSummary}/>
    )
}

export default PetsPage;