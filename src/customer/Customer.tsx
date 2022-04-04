import * as React from 'react';
import { Outlet } from 'react-router-dom';

function Customer() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}

export default Customer;
