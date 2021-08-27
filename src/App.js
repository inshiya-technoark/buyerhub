import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer';
import Buyerhub from './Pages/Buyerhub';
import Sellerhub from './Pages/Sellerhub';
import Home from './Pages/Home';
import Shop from './Pages/Shop';


function App() {
  return (
    <BrowserRouter basename="/buyerhub">
      

      { <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/home' exact component={Home} />
         <Route path='/shop' exact component={Shop} />
         <Route path='/sellerhub' component={Sellerhub} />
         <Route path='/buyerhub' component={Buyerhub} />
       </Switch> 
    }


      {
         <Footer />
      }
    </BrowserRouter>
  );
}

export default App;
