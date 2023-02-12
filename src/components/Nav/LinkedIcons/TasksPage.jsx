import React from 'react';
import { useHistory } from 'react-router-dom';
//mui component
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function TasksPage() {
    const history = useHistory();

    const sendToTaskSummary = () => {
        history.push('/taskSummary');
    }

    return (
        <FormatListBulletedIcon onClick={sendToTaskSummary}/>
    )
}

export default TasksPage;