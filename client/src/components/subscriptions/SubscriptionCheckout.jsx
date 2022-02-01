import React from 'react';
import { Button, Icon } from '@material-ui/core'
import useStyles from "../LoginReg/Styles"
import axios from 'axios';
const SubscriptionCheckout = () => {

  const classes = useStyles();
  const onClickHandler = () => {
    fetch("http://localhost:8000/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => {
        console.log(res.json)
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {

        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })
  }
  return (

    <div>
      <Button className={classes.checkoutButton}
        color='primary'
        fullWidth
        onClick={onClickHandler}

        startIcon={<Icon />}
        variant='contained'
      >checkout </Button>


    </div>
  )
};

export default SubscriptionCheckout;
