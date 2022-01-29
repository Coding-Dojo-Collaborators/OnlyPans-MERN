import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Test = () => {
    const [loggedinuser, setLoggedInUser] = useState({})
    const history = useHistory()
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                setLoggedInUser(res.data)
            })
            .catch(err => {
                history.push("/login")
                console.log("errorrrrrr", err)
            })
    }, [])
    const onClickHandler = () => {
        axios.get('http://localhost:8000/api/logout', { withCredentials: true })
        .then(res=>{
          history.push('/login');
        })
    }
    console.log(loggedinuser)
    return (
        <div>
            <h2>hello</h2>
            <h1>
                {loggedinuser.username}
            </h1>
            <button className='btn btn-danger' onClick={onClickHandler}>Log out</button>
        </div>

    )
};
