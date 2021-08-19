import React, {useEffect} from 'react';

import { IconContext } from 'react-icons/lib';
import {Section,Heading}from './Items.elements';

import { useDispatch } from 'react-redux';
import { fetchRepo } from '../../actions/repos';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography,Grid, Grow } from '@material-ui/core/';
import {
  BrowserRouter as Router,
 
  Link,
  
} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 845,
  },
  media: {
    height: 330 ,
  },
});

function Items() {

  const dispatch = useDispatch()

  const repos = useSelector((state) => state.repo)
  console.log("no no", repos.repo)
  const classes = useStyles();

  useEffect(() => {
    console.log("awdw")
    dispatch(fetchRepo())
  }, []);


  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <Section>
      <Heading>Trending Repositories</Heading>
     




            <Grow in>
            
              <Grid className={classes.container} container alignItems="flex-start" spacing={6}>
            
              {repos.repo && repos.repo.items.map((item) => (
                
                  <Grid item xs={12} sm={6} md={4} lg={3} className={classes.cardDetail}>
                 
                  
                    <Card className={classes.root}>
           
      
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.owner.avatar_url}
                title="Contemplative Reptile"/>

              <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                {item.full_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>

              </CardContent>
              <CardContent>
                <Typography variant="caption" color="textSecondary" component="b">
                  ⭐ Stars {item.stargazers_count}
                </Typography>
              </CardContent>
            </CardActionArea>
           

            <CardActions>

            <Button  href={item.html_url} size="small" color="primary" >
               Go to repository
            </Button>
            
            <Link to={`/Details/${item.id}`} >

              <Button href='/Details' size="small" color="primary">
                Learn More
              </Button>
             </Link>

            </CardActions>
          </Card>

            </Grid>
           
          ))}
          
          </Grid>
       

      </Grow>


         
      </Section>
    </IconContext.Provider>

   
  );
}
export default Items;
