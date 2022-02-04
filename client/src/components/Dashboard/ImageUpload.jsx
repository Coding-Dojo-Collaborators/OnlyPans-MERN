/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="#">
        OnlyPans
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// eslint-disable-next-line no-unused-vars
const theme = createTheme();

export default ({ handleClose, id, setLogout }) => {
  const [errors, setErrors] = useState("");
  const [profileAvatar, setProfileAvatar] = useState("");

  const logo = require('../static/images/onlypansegglogo.png');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/user/update/' + id,
      { profileAvatar: profileAvatar },
      { withCredentials: true })
      .then(res => {
        console.log(res)
        if (res.data.message === "success!") {
          // setUser(res.data)
          setLogout(res)
          handleClose()
        } else if (res.data.message) {
          console.log(res.data.message)
          setErrors(res.data)
        }
      })
      .catch(err => console.log(err));
  };

  return (
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
          Upload New Image:
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {
            errors.message ?
              <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                <Alert severity="error">{errors.message}</Alert>
              </Stack> : ""
          }
          <TextField
            margin="normal"
            required
            fullWidth
            id="profileAvatar"
            label="Image URL"
            name="profileAvatar"
            autoComplete=""
            autoFocus
            onChange={(e) => setProfileAvatar(e.target.value)}
            value={profileAvatar}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Avatar
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ pt: 3, mb: 4 }} />
    </Container>
  );
};