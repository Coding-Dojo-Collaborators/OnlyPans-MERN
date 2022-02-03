import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      {users.map((user, index) => {
        return (
          <p key = {index}>
            {user.username}
          </p>
        )
      })}
    </div>
  )
};

export default ViewAllUsers;
