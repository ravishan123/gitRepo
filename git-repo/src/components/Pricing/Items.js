import React, {useEffect} from 'react';

import { IconContext } from 'react-icons/lib';
import {Section,Heading}from './Items.elements';

import { useDispatch } from 'react-redux';
import { fetchRepo, reposForDays } from '../../actions/repos';
import { useSelector } from 'react-redux';

import loading from "../../images/loading.json"
import DisplayLottie from "../../components/DisplayLotties/DisplayLottie";


import { makeStyles} from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid, 
  Grow, 
  InputLabel,
  MenuItem,
  FormControl,
  Select


} from '@material-ui/core/';
import {
  BrowserRouter as Router,
 
  Link,
  
} from "react-router-dom";


// const useStyles = makeStyles({
  // root: {
  //   maxWidth: 845,
  // },
  // media: {
  //   height: 330 ,
  // },
 

// });

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    color:'white',
  },
  select:{
    color:'white'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    maxWidth: 845,
  },
  media: {
    height: 330 ,
  },
}));

function Items() {
 
 


  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter)
  const  log = useSelector(state=>state.isLog)
  const period = useSelector(state=> state.period)

  const repos = useSelector((state) => state.repo)
  console.log("no no", repos.repo)
  const classes = useStyles();

  useEffect(() => {
    console.log("awdw")
    dispatch(fetchRepo())
  }, []);





  //form
  const [periods, setperiod] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setperiod(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <Section>
      <Heading>Trending Repositories  </Heading>
     

      <div>
      <Button className={classes.button} 
      onClick={handleOpen}
      
      
      >
        Select the time period
      </Button>
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={()=>dispatch(reposForDays(7))}>Weekly</MenuItem>
          <MenuItem onClick={()=>dispatch(reposForDays(30))}>Monthly</MenuItem>
          <MenuItem onClick={()=>dispatch(reposForDays(365))}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </div>





            <Grow in>
            
              <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {repos.isLoading? 
                <DisplayLottie animationData={loading} />
                
              :
                repos.repo && repos.repo.items.map((item) => (
                
                  <Grid item xs="auto" sm={6} md={4} lg={3} className={classes.cardDetail}>
                 
                  
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
