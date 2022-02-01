import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from "react-google-login"
import { Icon } from '@material-ui/core'
import useStyles from "./styles"
import { useState } from 'react';
import axios from 'axios';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to='#'>
                OnlyPans
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export const Login = () => {
    const [errors, setErrors] = useState("")

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    })
    const history = useHistory()
    const classes = useStyles()
    const loginChangeHandler = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginInfo, { withCredentials: true })
            .then(res => {
                console.log(res)
                if (res.data.message == "success!") {
                    history.push("/")
                } else if (res.data.message){
                    console.log(res.data.message)
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line no-console

    }
    const googleSuccess = async (res) => {
        axios.post("http://localhost:8000/api/google/login", 
             res.profileObj
        , { withCredentials: true })
            .then(res => {
                console.log(res)
                if (res.data.message == "success!") {
                    history.push("/")
                } else {
                    
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err))
    }
    const googleFailure = () => {
        console.log("google sign in not working!")
    }

    return (
        <ThemeProvider theme={theme}>
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {errors.message? <p className="text-danger">{errors.message}</p> : ""}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange = {loginChangeHandler}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange = {loginChangeHandler}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <GoogleLogin
                            clientId='28144132869-865k00rjanquba9oel14bbtt75rn8tv5.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button className={classes.googleButton}
                                    color='primary'
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant='contained'
                                    sx={{  mb: 2 }}
                                >Google Sign In </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                        />
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/register' variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}