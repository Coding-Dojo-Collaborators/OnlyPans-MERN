/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Login from './Login';

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

export default function TransitionsModal() {
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
=======
  const [errors, setErrors] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  const classes = useStyles();

  const logo = require('../static/images/onlypansegglogo.png')

  const loginChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login', loginInfo, { withCredentials: true })
      .then(res => {
        console.log(res)
        if (res.data.message === "success!") {
          history.push('/')
        } else if (res.data.message) {
          console.log(res.data.message)
          setErrors(res.data)
        }
      })
      .catch(err => console.log(err));
  };

  const googleSuccess = async (res) => {
    axios.post('http://localhost:8000/api/google/login',
      res.profileObj
      , { withCredentials: true })
      .then(res => {
        console.log(res)
        if (res.data.message === "success!") {
          history.push('/')
        } else {
          setErrors(res.data)
        }
      })
      .catch(err => console.log(err));
  };

  const googleFailure = () => {
    console.log("Google sign in not working!");
  };
>>>>>>> 7936eafd31af1fe167e456526c54d723d0498bed

  return (
    <div>
      <Button onClick={handleOpen}
        sx={{
          color: '#fff',
          fontWeight: 'bold'
        }}
      >
        Log In
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
            {/* ENTER LOGIN HERE */}
            <Login />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
