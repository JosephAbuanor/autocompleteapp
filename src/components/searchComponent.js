import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import { Row } from 'react-bootstrap'
import SearchTextField from './searchTextField';

const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
}));

function SearchComponent() {

    const classes = useStyles();

    return (
        <div>
            <Paper style={{ background: "rgba(0, 0, 0, 0.8)", }} className={classes.paper} elevation={3}>
                <h2 style={{ color: 'white', fontWeight: '700' }}> Automatically Complete Texts</h2>
                <Typography style={{ color: 'grey', margin: '15px' }}>
                    Bringing the best matched suggestions for auto-complete as you type.
                </Typography><br /><br />
                <Row style={{ justifyContent: "center" }}>
                    <SearchTextField />
                </Row>
                <Typography >
                   <code style={{ color: 'grey', margin: '15px' }}>| Type to begin searching (eg. Java ) |</code>
                </Typography>
            </Paper>
        </div>
    );
}

export default SearchComponent;