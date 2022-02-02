import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const theme = createTheme();

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

export default function TransitionsModal() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const history = useHistory();

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
                // history.push('/')
                handleClose();
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
    <div>
      <Button onClick={handleOpen}>
        No Account? Create One Here
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* ENTER FORM HERE */}
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
                  Create Account
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
                      <Button variant="body2">Log In</Button>                     
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
