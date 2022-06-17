import React from 'react';
import { Button } from '@mui/material';
import { useStyles } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';

function HomeComponent() {
    const history = useNavigate();
    const classes = useStyles();
    const gotToDashboard = (e, url) => {
        history(url);
    }
    return (
        <>
            <div className={classes.homeRoot}>
                <div className={classes.containerDiv}>
                    <Button variant="contained" className={classes.extraBtnStyle} onClick={e => gotToDashboard(e, '/user')}
                        size="large" color="primary">User Dashboard
                    </Button>
                </div>
            </div>
        </>
    )
}
export default HomeComponent