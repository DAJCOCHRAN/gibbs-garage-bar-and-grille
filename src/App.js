import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import OurStaff from './components/OurStaff'
import MenuPDF from './components/MenuPDF'
import Burgers from './components/menuItems/Burgers'
import Sides from './components/menuItems/Sides'
import Desserts from './components/menuItems/Desserts'
import Specials from './components/menuItems/Specials'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavigationSecondaryBar from './components/NavigationSecondaryBar';
import { Container, Row, Col } from 'react-bootstrap';
function App() {

  return (
    <div>
      <Router>
        <NavigationBar />
        <NavigationSecondaryBar />
        <Switch>
          <Route path="/ourStaff">
            <OurStaff />
          </Route>
          <Route path="/menuPDF">
            <MenuPDF />
          </Route>
          <Route path="/desserts">
            <Desserts />
          </Route>
          <Route path="/burgers">
            <Burgers />
          </Route>
          <Route path="/sides">
            <Sides />
          </Route>
          <Route path="/specials">
            <Specials />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
