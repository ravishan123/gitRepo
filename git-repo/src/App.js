import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Details from './pages/Details/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

import { useSelector,useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state=>state.counter)
  const  log = useSelector(state=>state.isLog)
  const period = useSelector(state=> state.period)

  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repo)
 
   return (
  
    <Router>
      <GlobalStyle />
      <ScrollToTop />
   
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Details/:id' component={Details}/>
        <Route path='/About' component={About} />
        
      </Switch>
      <Footer />


    </Router>
  );
}

export default App;
