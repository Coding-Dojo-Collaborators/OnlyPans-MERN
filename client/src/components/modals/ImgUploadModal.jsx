/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import ImageUpload from '../Dashboard/ImageUpload';

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

export default function TransitionsModal({ setLogout, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyle = {
    position: 'relative',
    bottom: '35px',
    right: '-105px',
    color: '#f8b739',
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    ':hover': {
      color: '#fff',
      border: 0
    },
  }

  return (
    <div>
      <Button onClick={handleOpen}
        sx={buttonStyle}
        variant="text"
      ><UploadIcon /></Button>
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
            <ImageUpload handleClose={handleClose}
              id={id}
              setLogout={setLogout}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
