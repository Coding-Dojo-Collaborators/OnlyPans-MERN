/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import LoginModal from './LoginModal';

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href='https://mui.com/'>
        OnlyPans
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// eslint-disable-next-line no-unused-vars
const theme = createTheme();

export default () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  const logo = require('../static/images/onlypansegglogo.png')

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/register', {
      email: email,
      username: userName,
      password: password,
      confirm: confirmPassword
    })
      .then(res => {
        console.log("response from registering", res);
        if (res.data.errors) {
          setErrors(res.data.message)
        } else {
          axios.post('http://localhost:8000/api/login', {
            email: email,
            password: password
          }, { withCredentials: true })
            .then(res => {
              console.log(res)
              if (res.data.message === "success!") {
                history.push('/')
              } else if (res.data.message) {
                console.log(res.data.message)
                setErrors(res.data)
              }
            })
            .catch(err => console.log(err))
          // login()
        }
      })
      .catch(err => console.log(err))
  };

  return (
    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar variant="square"
          src={logo} alt="logo"
          sx={{
            height: 42,
            width: 53,
            mb: 3,
            pl: 1
          }}
        >
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              {
                errors.message ?
                  <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    <Alert severity="error">{errors.message}</Alert>
                  </Stack> : ""
              }
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="family-name"
              />
              {/* {errors.last_name? <p className="text-danger">{errors.last_name}</p>: ""} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {/* {errors.email? <p className="text-danger">{errors.email}</p>: ""} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              {/* {errors.password? <p className="text-danger">{errors.password}</p>: ""} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
              />
              {/* {errors.confirm_password? <p className="text-danger">{errors.confirm_password}</p>: ""} */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Account
          </Button>
          {/* <Grid container justifyContent="center">
            <Grid item sx={{ textAlign: 'center' }}>
              Already have an Account?
              <LoginModal variant="body2" />
            </Grid>
          </Grid> */}
        </Box>
      </Box>
      <Copyright sx={{ pt: 3, mb: 4 }} />
    </Container>
    // </ThemeProvider>
  );
};