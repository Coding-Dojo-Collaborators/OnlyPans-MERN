import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

const UserView = ({children}) => {
  
  const history = useHistory()
  useEffect(()=>{
    axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
        .then(res=>{
            history.push('/')
            
        })
        .catch(err=> {
            
            console.log("noUser logged in")
        })
}, [])

  return (
    <div className=' '>
      
      <div >
        {children}
        </div>
    </div>
  )
};

export default UserView;