import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';  
import Header from './Components/Header';    
import SearchPage from './Components/SearchPage';    
import Footer from './Components/Footer';    

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">

      <Router>
              <Header/>

          <Switch>

              <Route path="/search">
                   <SearchPage/>
              </Route>

              <Route path="/">
                   <Home/>
              </Route>

          </Switch>
          
          <Footer/>
      </Router>

    </div>
  );
}

export default App;
