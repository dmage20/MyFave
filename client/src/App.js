import React, { 
  // useEffect,
  Fragment 
 } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Offers from './components/Offers'
// Redux------------------
import { Provider } from 'react-redux'
import store from './store'
// -----------------Redux


const App = ()=> {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/partners/:name' component={Offers}/>
        </Switch>
          <section className='container'>
          </section>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
