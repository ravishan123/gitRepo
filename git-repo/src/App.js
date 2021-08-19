import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Details from './pages/Details/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
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
