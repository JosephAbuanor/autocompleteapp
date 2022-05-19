import React from 'react';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Gator from "../assets/images/croc.png";
import { Row, Col } from "react-bootstrap";
import RefreshIcon from "@material-ui/icons/Refresh";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({

    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  
    title: {
      flexGrow: 1,
    },
  
    appBarSpacer: theme.mixins.toolbar,

  
  }));
  

function NavbarComponent(props) {
    const classes = useStyles();

    return (
        <div>
            <AppBar
                style={{ backgroundColor: "green" }}
                position="absolute"
                className={clsx(classes.appBar)}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >

                        <img className="navbar-img" alt="logo" src={Gator} />  Auto Complete App

                    </Typography>{" "}
                    <IconButton color="inherit">
                        <RefreshIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavbarComponent;