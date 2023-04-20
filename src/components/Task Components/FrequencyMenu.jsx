import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    //declare dispatch'
    const dispatch = useDispatch();
    
    //subscribe to tasks
    const tasks = useSelector(store => store.tasks);

    //set frequency values
    const handleDaily = () => {
        changeFrequency('Daily');
    }

    const handleWeekly = () => {
        changeFrequency('Weekly');
    }

    const handleMonthly = () => {
        changeFrequency('Monthly');
    }

    const changeFrequency = (value) => {
        dispatch({
            type: 'SET_FREQUENCY',
            payload: value
        })
    }

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
                {tasks.singleTaskReducer.frequency || 'Daily'}
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
                <MenuItem onClick={handleDaily}>Daily</MenuItem>
                <MenuItem onClick={handleWeekly}>Weekly</MenuItem>
                <MenuItem onClick={handleMonthly}>Monthly</MenuItem>
            </Menu>
        </>
    )
}

export default FrequencyMenu;