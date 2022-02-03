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
import { FormControl, InputLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'

import { MenuItem, Select } from '@mui/material';

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

export default ({ initialName, initialCuisine,
    initialDescription, initialIngredients, initialInstructions,
    initialImage, initialAllergies, onSubmitProp, errors, initialCategory, userId , formName}) => {
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
    
    const formStyle = {
        color:'text.primary'
        }



    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            name: name,
            cuisine: cuisine,
            description: description,
            ingredients: ingredients,
            instructions: instructions,
            image: image,
            userId: userId,
            category: category,
            favoritedUsers: favoritedUsers,
            allergies: allergies
        })
    }


    return (
        // <ThemeProvider theme={theme}>
            <Container 
            sx={formStyle}
            component="main" 
            maxWidth="md"
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                   
                    <Typography 
                    sx={formStyle}
                    component="h1" 
                    variant="h5">
                        {formName}
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
                                    value={name}
                                    onChange={(e)  => setName(e.target.value)}
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
                                    value={cuisine}
                                    onChange={(e) => setCuisine(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Category"
                                        name="category"
                                        autoComplete="cuisine"
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <MenuItem value="breakfast">Breakfast</MenuItem>
                                        <MenuItem value="lunch">Lunch</MenuItem>
                                        <MenuItem value="dinner">Dinner</MenuItem>
                                        <MenuItem value="quick">Quick And Easy</MenuItem>
                                        <MenuItem value="wineAndDine">Wine And Dine</MenuItem>
                                        <MenuItem value="bakedGoods">Baked  Goods</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="imgUrl"
                                    label="Image Url"
                                    name="imgUrl"
                                    value={image}
                                    autoComplete="imgUrl"
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                     multiline rows={2}
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    multiline rows={4}
                                    required
                                    fullWidth
                                    name="Ingredients"
                                    label="Ingredients"
                                    type="Ingredients"
                                    id="Ingredients"
                                    autoComplete="new-Ingredients"
                                    value={ingredients}
                                    onChange={(e) => setIngredients(e.target.value)}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    multiline rows={4} 
                                    required
                                    fullWidth
                                    name="Instructions"
                                    label="Instructions"
                                    type="Instructions"
                                    id="Instructions"
                                    autoComplete="new-Instructions"
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        <Grid container justifyContent="flex-end">

                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        

    );
}