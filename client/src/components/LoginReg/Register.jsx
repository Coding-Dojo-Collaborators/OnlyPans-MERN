import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';



const Register = () => {
    const history = useHistory()
    const [emailErrors, setEmailErrors] = useState(false)

    const [registerInfo, setRegisterInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })
    const [loginInfo, setLoginInfo] = useState({})


    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })

    const regChangeHandler = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]: e.target.value
        })
    }


    const register = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/register", registerInfo, { withCredentials: true })
            .then(res => {
                console.log("response from registering", res);
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    console.log("success!")
                    setLoginInfo({

                        email: registerInfo.email,
                        password: registerInfo.password,
                    })
                    login(loginInfo)

                }
            })
            .catch(err => console.log(err))

    }
    const login = (loginInfo) => {
        axios.post("http://localhost:8000/api/login", loginInfo, { withCredentials: true })
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

    return (
        <>
            <div className="text-center mt-3">
                <form className='card col-4 p-3 mx-auto mt-3' onSubmit={register}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input onChange={regChangeHandler} type="text" className="form-control" name='username' />
                        {errors.username ? <p className="text-danger">{errors.username.message}</p> : ""}
                        {
                            (registerInfo.username.length !== 0 && registerInfo.username.length < 3) &&
                            <p className="alert alert-danger">UserName must be at least 3 characters long.</p>
                        }
                    </div>
                    <div className="form-group my-3">
                        <label>Email</label>
                        <input onChange={regChangeHandler} type="text" className="form-control" name='email' autoComplete='off' />
                        {errors.email ? <p className="text-danger">{errors.email.message}</p> : ""}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={regChangeHandler} type="password" className="form-control" name='password' />
                        {errors.password ? <p className="text-danger">{errors.password.message}</p> : ""}
                        

                    </div>
                    <div className="form-group my-3">
                        <label>Confirm Password</label>
                        <input onChange={regChangeHandler} type="password" className="form-control" name='confirm' />
                        {errors.confirm ? <p className="text-danger">{errors.confirm.message}</p> : ""}
                        
                    </div>
                    <div className='d-flex justify-content-between p-3'>
                        <input disabled={registerInfo.username.length < 3 } type="submit" value="Sign Up" className="btn btn-primary" />
                        <Link to="/">Already Registered? Login Here!</Link>
                    </div>
                </form>
            </div>

        </>
    );
};



export default Register;