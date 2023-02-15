import React from 'react';
import { useSelector } from 'react-redux';
//components
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import CompleteIcon from '../Buttons/CompleteIcon';
import ClaimStatusChip from './ClaimStatusChip';
//mui components
import { Grid, Paper, Typography } from '@mui/material';

function TaskItem({ task }) {
    const user = useSelector((store) => store.user);

    //filter taskUserRelation for unique ids
    const filterUserID = (array) => {
        let newArray = [];
        let userID = 0;
        for (let obj of array) {
            if (obj.userID !== userID) {
                newArray.push(obj);
                userID = obj.userID;
            }
        }
        return newArray;
    }

    //create filtered taskUserRelation array
    const uniqueTURelation = filterUserID(task.taskUserRelation);

    return(
            <li> 
                <Paper sx={{width: 300}} elevation={2} padding={2}>
                    <Grid
                        marginLeft={1}
                        marginRight={1}
                    >
                        <Grid                                 
                            container spacing={2}
                            marginTop={1}
                            paddingTop={1}
                            paddingRight={1}
                            justifyContent="flex-end"
                        >
                            <CompleteIcon task={task}/>
                        </Grid>
                    <Typography>Pet: {task.name}</Typography>
                    <Typography>{task.frequency} Task: {task.taskDesc}</Typography> 
                    <Typography>Responsible People:
                        {uniqueTURelation.map(user => <Typography>{user.username}</Typography>)}
                    </Typography>
                        <Grid
                            container spacing={2}
                            marginTop={1}
                            marginBottom={2}
                            paddingBottom={1}
                            justifyContent="space-around"
                        >
                            <ClaimStatusChip id={user.id} task={task}/>
                            <DeleteButton className="taskDelete" task = {task}/>
                            <EditButton className="taskEdit" task = {task}/>
                        </Grid>
                    </Grid>
                </Paper>
            </li>
    )
}

export default TaskItem;