import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                OnlyPans
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default  ({ initialName, initialCuisine,
    initialDescription, initialIngredients, initialInstructions, 
    initialImage, initialAllergies,onSubmitProp, errors, initialCategory, userId}) => {
    const [name, setName] = useState(initialName);
    const [cuisine, setCuisine] = useState(initialCuisine);
    const [description, setDescription] = useState(initialDescription);
    const [ingredients, setIngredients] = useState(initialIngredients);
    const [instructions, setInstructions] = useState(initialInstructions);
    const [image, setImage] = useState(initialImage)
    const [allergies, setAllergies] = useState(initialAllergies);
    const [category, setCategory] = useState(initialCategory)
    // const [userId, setUserId] = useState(user._id)
    const [favoritedUsers, setFavoritedUsers] = useState([])
    const logo = require('../static/images/onlypansegglogo.png')
    
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ 
            name : name,
             cuisine : cuisine,
              description : description, 
            ingredients : ingredients, 
            instructions : instructions, 
            image : image,
             userId : userId,
              category : category,
              favoritedUsers : favoritedUsers, 
              allergies : allergies })
    }
    

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar variant="square"
                    src={logo} alt="logo"
                    sx={{
                        height: 42,
                        width: 53,
                        mb: 3,
                        pl: 1
                    }}
                >
                </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={onSubmitHandler} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="name"
                                    name="Name"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cuisine"
                                    label="Cuisine"
                                    name="cuisine"
                                    autoComplete="cuisine"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="name"
                                    name="Name"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cuisine"
                                    label="Cuisine"
                                    name="cuisine"
                                    autoComplete="cuisine"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="description"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
        
    );
}