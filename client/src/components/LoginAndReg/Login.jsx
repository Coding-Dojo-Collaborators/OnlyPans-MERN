import React from 'react';
import { GoogleLogin } from "react-google-login"
import { Button, Icon } from '@material-ui/core'
import useStyles from './styles';
export const Login = () => {
    const classes = useStyles();
    return (
        <div>
            <GoogleLogin
                clientId='28144132869-865k00rjanquba9oel14bbtt75rn8tv5.apps.googleusercontent.com'
                render={(renderProps) => (
                    <Button classname={classes.googleButton}
                        color='primary'
                        fullWidth
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        startIcon={<Icon />}
                        variant='contained'
                    >Google Sign In </Button>
                )}/>
        </div>

  )
}
