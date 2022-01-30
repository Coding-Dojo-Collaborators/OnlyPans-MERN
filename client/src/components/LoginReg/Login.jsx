import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from "react-google-login"
import { Button, Icon } from '@material-ui/core'
import useStyles from "./styles"



const Login = () => {
    const [errors, setErrors] = useState("")

    const [loginInfo, setLoginInfo] = useState({ 
        email:"",
        password:"",
    })
    const history = useHistory()
    const classes = useStyles();
   
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        console.log(res)
        
        console.log(result )
        // familyName givenName email googleId

        axios.get(`http://localhost:8000/api/users/email/${result.email}`)
        .then(response => {
            response.data.user !== null ?
            googleLogin(result.email, result.googleId)
            :
            axios.post('http://localhost:8000/api/register', {
                username : result.name,
                email : result.email,
                password : result.googleId,
                confirm : result.googleId
            }) .then(res => {
                console.log("response from registering", res);
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    console.log("success!")
                    
                    googleLogin(result.email, result.googleId)

                }
            })
        })
            .catch(err => console.log(err))
        

      
    }
    const googleFailure = () => {
        console.log("google sign in not working!")
    }
    

    const loginChangeHandler = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }
    const googleLogin = (email, password) => {
        axios.post("http://localhost:8000/api/login", {
            email : email,
            password :password
        }, { withCredentials: true })
            .then(res => {
                if (res.data.msg == "success!") {
                    history.push("/")
                } else {
                    console.log(res.data.msg)
                    setErrors(res.data.msg)
                }
            })
            .catch(err => console.log(err))
    }
    const login = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginInfo, {withCredentials:true} )
        .then(res=>{
            if(res.data.msg == "success!"){
                history.push("/")
            }else{
                console.log(res.data.msg)
                setErrors(res.data.msg)
            }
        })
        .catch(err=> console.log(err))
    }
   

    return (
        <div className='text-center mt-3'>
            <h2>Login below</h2>
        <form className='card col-4 p-3 mx-auto mt-3' onSubmit= {login}>
            <div className="form-group">
                <label>Email</label>
                <input onChange = {loginChangeHandler} type="text" className="form-control" name= 'email' />
            </div>
            {errors &&
            <div className='bg-dark text-danger p-2'>
                {errors}
            </div> 
            }
            <div className="form-group my-3">
                <label>Password</label>
                <input onChange = {loginChangeHandler} type="password" className="form-control" name= 'password' />
                

            </div>
            
            <div className='d-flex justify-content-between p-3'>
                <button className= "btn btn-primary col-3">Login</button> 

                <div className='d-flex justify-content-end mt-3 gap-3'>
                    <h5>New Here ? </h5>
                    <Link to="/register"> Register Here</Link>
                </div>
            </div>
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
                    >Google Sign In </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy='single_host_origin'
                />
        </form>
    </div>
    );
};


export default Login;