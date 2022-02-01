/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';


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

const theme = createTheme();

export default () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(false);

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
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#003892' }}>
          <LockOutlinedIcon sx={{ m: 1, color: '#fff' }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              {errors ? <p className="text-danger">{errors}</p> : ""}
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
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to='/login' variant="body2">
                Already Have an Account? Log In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
    // </ThemeProvider>
  );
};