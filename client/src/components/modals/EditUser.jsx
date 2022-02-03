/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import useStyles from './Styles';


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

export default ({ handleClose, username, email, id, setLogout }) => {
    const [errors, setErrors] = useState("");
    const [editInfo, setEditInfo] = useState({
        email: email,
        username: username,
    });
    const history = useHistory();
    const classes = useStyles();

    const logo = require('../static/images/onlypansegglogo.png')

    const editChangeHandler = (e) => {
        setEditInfo({
            ...editInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/user/update/' + id, editInfo, { withCredentials: true })
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
                    Edit Info
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={editChangeHandler}
                        value={editInfo.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="Username"
                        type="username"
                        id="username"
                        autoComplete="current-username"
                        onChange={editChangeHandler}
                        value={editInfo.username}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Edit 
                    </Button>
                    <Grid container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {/* <Grid item sx={{ textAlign: 'center' }}>
                            Don't have an Account?
                            <RegistrationModal variant="body2" setUser={setUser} />
                        </Grid> */}
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ pt: 3, mb: 4 }} />
        </Container>
        // </ThemeProvider>
    );
};