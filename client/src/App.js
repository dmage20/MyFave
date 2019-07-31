import React, { 
  // useEffect,
  Fragment 
 } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

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
        <Route exact path='/' component={Landing} />
          <section className='container'>
          </section>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
