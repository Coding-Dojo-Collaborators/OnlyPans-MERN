// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useHistory, Link } from 'react-router-dom';
// import Login from '../../components/modals/Login';

// const EditUser = (props) => {
//   const history = useHistory();
//   const { id } = useParams();
//   const [user, setUser] = useState();
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     axios.get('http:localhost:8000/api/users/getloggedinuser')
//       .then(res => {
//         setUser(res.data);
//         setLoaded(true);
//       })
//   }, []);

//   const updateUser = user => {
//     axios.put('http://localhost:8000/api/user/update/' + id, user)
//       .then(res => {
//         console.log(res);
//         history.push('/dashboard' + id);
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
  

//   return (
//     <div>
//       <h1>Edit User</h1>
//       {loaded && (
//         <>
//           <Login 
          
//           />
//         </>
//       )}
//     </div>
//   )
// };

// export default EditUser;
