import * as React from 'react';
import { Fragment } from 'react';
import { Button, Grid, TextField } from '@mui/material';

function NewCustomer() {
  return (
    <Fragment>
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={6}>
          <TextField label="First Name" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Last Name" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address" fullWidth variant="standard" />
        </Grid>
        <Grid container item direction="row" spacing={4} mt={1}>
          <Grid item>
            <Button variant="contained">Save</Button>
          </Grid>
          <Grid item>
            <Button>Cancel</Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default NewCustomer;
