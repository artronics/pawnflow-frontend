import * as React from 'react';
import { Fragment } from 'react';
import Appbar from './Appbar';
import { CssBaseline, Grid } from '@mui/material';
import SideMenu from './SideMenu';
import NewCustomer from '../customer/NewCustomer';
import ReceiptFrame from './ReceiptFrame';
import Box from '@mui/material/Box';

function AppLayout() {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={{ height: '100%', display: 'flex' }} flexDirection="column">
        <Appbar />
        <Box id="cont" sx={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
          <Box sx={{ backgroundColor: 'primary.main', padding: '1em 0 0 0' }}><SideMenu /></Box>
          <Box sx={{ overflowY: 'auto', margin: '1em 2em 0 2em' }} flexGrow={1}><NewCustomer /></Box>
          <Box bgcolor="lightpink" flex="1">receipt</Box>
        </Box>
      </Box>
    </Fragment>
  );
}

function old() {
  return (
    <Fragment>
      <CssBaseline />
      <Appbar />
      <Grid container justifyContent="stretch" justifyItems="stretch" justifySelf="stretch" direction="row">
        <Grid item xs={1} container direction="column" bgcolor="azure">
          <SideMenu />
        </Grid>
        <Grid container item direction="row" justifyContent="space-evenly" xs rowSpacing={2} columnSpacing={4}>
          {/*<Box mr={10} ml={10}>*/}
          <NewCustomer />
          {/*</Box>*/}

        </Grid>
        <Grid xs={3}>
          <ReceiptFrame />
        </Grid>
      </Grid>
    </Fragment>
  );

}

export default AppLayout;
