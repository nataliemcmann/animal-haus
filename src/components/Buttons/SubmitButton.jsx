import React from 'react';
import Button from '@mui/material/Button';


function SubmitButton (props) {
    if (props.className === 'petEdit' ||
        props.className === 'taskEdit') {
        return (
            <Button variant="contained" color ="success" size="small" type="submit">
                Save Changes
            </Button>
        )
    }
    return(
        <Button variant="contained" color ="success" size="small" type="submit">
            Add
        </Button>
    );
}

export default SubmitButton;