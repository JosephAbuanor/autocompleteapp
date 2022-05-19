  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './copyright';


const useStyles = makeStyles((theme) => ({

  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:theme.palette.grey[300],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}