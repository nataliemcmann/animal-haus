import React, { useState } from 'react';
//mui components
import { Button, Menu, MenuItem } from '@mui/material';

function FrequencyMenu({task}) {
    //menu set up from https://mui.com/material-ui/react-menu/
    const [anchorElement, setAnchorElement] = useState(null);
    const open = Boolean(anchorElement);
    const handleClick = (event) => {
        setAnchorElement(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorElement(null);
    }
    
    // const changeFrequency = (value) => {
    //     dispatch({
    //         type: 'SET_FREQUENCY',
    //         payload: value
    //     })
    // }

    return (
        <>
        <Button
            variant="contained"
            color="secondary"
            size="large"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            {task.frequency || ''}
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{
        'aria-labelledby': 'basic-button',
        }}
        >
            <MenuItem onClick={handleClose}>Daily</MenuItem>
            {/* <MenuItem onClick={handleClose}>Weekly</MenuItem>
            <MenuItem onClick={handleClose}>Monthly</MenuItem> */}
        </Menu>
        </>
    )
}

export default FrequencyMenu;