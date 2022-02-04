/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable array-callback-return */
import * as React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../Buttons/DeleteButton';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StickyFooter from './StickyFooter';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

export default ({ user }) => {
  const [recipes, setRecipes] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortTag, setSortTag] = useState('All POSTS');

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipe')
      .then(res => setRecipes(res.data));
  }, []);

  const removeFromDom = recipeId => {
    setRecipes(recipes.filter(recipe => recipe._id !== recipeId))
  }

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

  return (
    <div className='blog-body'>
      <h4 className='body-title text-center'>{sortTag}</h4>
      <div className='mt-5'>
        <ul className='categories-list 
        d-flex align-items-center justify-content-center gap-4 px-0'>
          <li>
            <Button component={Link} to='#'
              onClick={(e) => {
                setSortTag('All POSTS')
                setSortBy('')
              }}
              sx={linkStyle}
              className=''
            >
              All Posts
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Breakfast')
                setSortBy('breakfast')
              }}
            >
              Breakfast
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              onClick={(e) => {
                setSortTag('Lunch')
                setSortBy('lunch')
              }}
              className=''
            >
              Lunch
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Dinner')
                setSortBy('dinner')
              }}
            >
              Dinner
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Quick & Easy')
                setSortBy('quick')
              }}
            >
              Quick & Easy
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Wine And Dine')
                setSortBy('wineAndDine')
              }}
            >
              Wine & Dine
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Baked Goods')
                setSortBy('bakedGoods')
              }}
            >
              Baked Goods
            </Button>
          </li>
        </ul>
      </div>
      <div className='all-posts 
      d-flex align-items-center
      justify-content-center mt-5 gap-5 flex-wrap'>
        {
          recipes.filter((recipe) => {
            if (sortBy === '') {
              return recipe
            } else if (recipe.category.toLowerCase().includes(sortBy.toLowerCase())) {
              return recipe
            }
          }).map((recipe, index) => {
            let made = recipe.createdAt,
              createdDate = (new Date(made)).toLocaleString();
            return (
              <div className="recipe-card">
                <Card key={index}
                  sx={{
                    maxWidth: 345,
                  }}>
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
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
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
                  <Link to={`/recipe/${recipe._id}`}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={recipe.image}
                      alt={recipe.name}
                    />
                  </Link>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                      }}>
                      {recipe.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    {
                      user._id === recipe._id ?
                        <Link to={'/recipe/edit/' + recipe._id}>
                          Edit Recipe
                        </Link>
                        |
                        <DeleteButton
                          recipeId={recipe._id}
                          successCallback={() => removeFromDom(recipe._id)}
                        />
                        : <></>
                    }
                    <Button
                      onClick={(e) => onFavoriteHandler(recipe._id, recipe.image, recipe.name)}
                    >
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                    </Button>
                    {/* <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton> */}
                  </CardActions>
                </Card>
              </div>
            )
          })
        }
      </div>
      <div className='mt-5'>
        <StickyFooter />
      </div>
    </div>
  )
}