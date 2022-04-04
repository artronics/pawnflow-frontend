import * as React from 'react';
import { Fragment } from 'react';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Home } from '@mui/icons-material';

function SideMenu() {
  return (
    <Fragment>
      <Grid item>
        <IconButton color="inherit"> <Home fontSize="large" /></IconButton>
      </Grid>
      <Grid item>
        <IconButton color="inherit"> <Home fontSize="large" /></IconButton>
        <p>home</p>
      </Grid>
    </Fragment>
  );
}

export default SideMenu;
