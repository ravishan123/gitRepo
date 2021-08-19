import React from 'react';
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { fetchRepo } from '../../actions/repos';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  useParams} from "react-router-dom";
import {Section,Heading}from '../Details/Detail.elements';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,Typography,Button,Avatar} from '@material-ui/core/';
// import {SkipPreviousIcon,SkipNextIcon,PlayArrowIcon} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding:'100px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  
  },
  content: {
    flex: '1 0 auto',
    
    maxHeight: 845,
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  image:{
    minWidth: 100,
    minHeight: 100,
    borderRadius: '100%',
    objectFit: 'cover'
  },
  h5:{

  }
}));



function Details() {

  const classes = useStyles();
  const theme = useTheme();



  let { id } = useParams();
  console.log("id no", id)

  const dispatch = useDispatch()
  
  const details = useSelector((state) => state.repo.repo.items.filter(x => x.id === parseInt(id))[0])
  console.log("no no", details)


 useEffect(() => {
    console.log("awdw")
    dispatch(fetchRepo())
  }, []);


 



  return (


  
//     <div > 
// {/*     
//     <p>{details.full_name}</p>
//     <p>{details.forks}</p>
//     <p>{details.description}</p>
//     <p>{details.description}</p>
//      */}
    
    
//     </div>

     <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" fontWeight={500}>
            {details.full_name}
          </Typography>
          <Typography variant="caption" color="textSecondary">
           {details.owner.login} <Avatar alt={details.owner.login} src={details.owner.avatar_url} />
          </Typography>
          <Typography variant="subtitle1" color="text">
          {details.description}
          </Typography>


          <Typography variant="subtitle2" color="textSecondary">
           Stars ⭐ {details.stargazers_count} | Watchers 👁️ {details.watchers_count}| Forks  {details.forks_count} 
          </Typography>


          <Typography variant="subtitle1" color="textSecondary">
          Languages :  {details.language}
          </Typography>
        </CardContent>
        <div className={classes.controls}>

        <Button  href={details.html_url} size="small" color="primary" >
               Go to repository
            </Button>
            
        
        </div>
      </div>

     
      <CardMedia
        className={classes.cover}
        image={details.owner.avatar_url}
        title="Avatar"
      />
    </Card>



























  );
}

export default Details;
