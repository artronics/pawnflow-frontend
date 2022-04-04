import * as React from 'react';
import AppLayout from './layout/AppLayout';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home/Home';
import NewCustomer from './customer/NewCustomer';
import Login from './auth/Login';
import Customer from './customer/Customer';
import CustomerHome from './customer/CustomerHome';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<Customer />}>
            <Route index element={<CustomerHome />} />
            <Route path="new" element={<NewCustomer />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>);
}

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppRoutes />
    </React.Fragment>
  );
}
