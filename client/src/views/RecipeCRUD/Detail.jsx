/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import BlogHeader from '../../components/RecipeBlog/BlogHeader';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StickyFooter from '../../components/RecipeBlog/StickyFooter';

const Detail = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser",
      { withCredentials: true })
      .then(res => {
        console.log(res.data);
        setUser(res.data)
      })
      .catch(err => {
        history.push('/')
        console.log("noUser logged in")
      });
    axios.get('http://localhost:8000/api/recipe/' + id)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [history, id]);

  const onFavoriteHandler = (id, img, name) => {
    let newFavorite = { id, img, name }
    let favorites = [...user.favoriteRecipe, newFavorite]
    axios.put(`http://localhost:8000/api/user/update/${user._id}`, {
      favoriteRecipe: favorites
    })
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
  };

  const linkStyle = {
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    color: '#000',
    textTransform: 'capitalize',
    p: 0,
    ':hover': {
      color: '#212121'
    },
    ':active': {
      fontWeight: 'bold'
    }
  }

  const avatarSize = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'cover',
    height: 60,
  }

  let made = recipe.createdAt,
    createdDate = (new Date(made)).toLocaleString();

  return (
    <div className='container'>
      <BlogHeader user={user}
        pageComponent='viewonerecipe' />
      <div className='one-recipe mx-auto 
      d-flex align-items-center
      justify-content-center mt-5 gap-5 flex-wrap'>
        <Card sx={{
          maxWidth: 900,
          marginTop: '-200px',
          padding: '50px 75px',

        }}>
          <div className="recipe-header 
            d-flex align-items-center justify-content-between pb-2">
            <CardHeader
              avatar={
                <Link to='#'
                // {`/user/${user._id}`}
                >
                  <img src={user.profileAvatar}
                    alt="{name}" className="img logo rounded-circle mb-1"
                    style={avatarSize}></img>
                </Link>
              }
              title={
                <Button component={Link} to={`/recipe/${recipe._id}`}
                  sx={linkStyle}
                  style={{
                    fontWeight: 'bold',
                    lineHeight: 'normal',
                    marginBottom: '5px',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                  }}>
                  {recipe.name}
                </Button>
              }
              subheader={createdDate}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"
                onClick={(e) => onFavoriteHandler(recipe._id, recipe.image, recipe.name)}
                sx={{
                  ':hover': {
                    color: 'red'
                  },
                }}>
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </div>
          <div className="recipe-body">
            <CardMedia
              component="img"
              height="400"
              image={recipe.image}
              alt={recipe.name}
            />
            
            <CardContent>
              <Typography paragraph
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 1 }}>
                <strong>Category: </strong>
                {
                  recipe.category === 'breakfast' ?
                    'Breakfast' :
                    recipe.category === 'lunch' ?
                      'Lunch' :
                      recipe.category === 'dinner' ?
                        'Dinner' :
                        recipe.category === 'quick' ?
                          'Quick & Easy' :
                          recipe.category === 'wineAndDine' ?
                            'Wine & Dine' :
                            recipe.category === 'bakedGoods' &&
                            'Baked Goods'
                }
              </Typography>
              <Typography paragraph
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 1 }}>
                <strong>Cuisine:</strong> {recipe.cuisine}
              </Typography>
              <Typography paragraph
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 4 }}>
                <strong>Allergy Warning:</strong> {recipe.allergies}
              </Typography>
              <Typography paragraph
                variant="body2" color="text.secondary">
                <h6>Ingredients:</h6>
              </Typography>
              <Typography paragraph
                variant="body2" color="text.secondary">
                {recipe.ingredients}
              </Typography>
              <Typography paragraph
                variant="body2" color="text.secondary">
                <h6>Instructions:</h6>
              </Typography>
              <Typography paragraph
                variant="body2" color="text.secondary">
                {recipe.instructions}
              </Typography>
            </CardContent>
            {
              user._id === recipe.userId ?
                <Button component={Link}
                  to={`/recipe/edit/${recipe._id}`}
                  sx={{
                    paddingLeft: '16px',
                    fontFamily: 'Open Sans',
                    color: '#000',
                    fontWeight: 'bold',
                    ':hover': {
                      color: '#ffc107'
                    }
                  }}>
                  Edit Recipe
                </Button>
                : <></>
            }
          </div>
        </Card>
      </div>
      <div className='mt-5'>
        <StickyFooter />
      </div>
    </div>
  )
}

export default Detail;