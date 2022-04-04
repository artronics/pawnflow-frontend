import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/');
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }} flexDirection="row" justifyContent="space-around">
        <Stack sx={{ width: 400, marginTop: 10 }} spacing={2}>
          <TextField label="Email" fullWidth variant="standard" />
          <TextField type="password" label="Password" fullWidth variant="standard" />
          <Box sx={{ marginTop: '20px' }} />
          <Button onClick={() => onLogin()} sx={{ textAlign: 'center' }} size="large" variant="contained">Login</Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
}

export default Login;
