import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import OurStaff from './components/OurStaff'
import MenuPDF from './components/MenuPDF'
import BurgersSandwiches from './components/menuItems/BurgersSandwiches'
import Entrees from './components/menuItems/Entrees'
import SoupsSalads from './components/menuItems/SoupsSalads'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavigationSecondaryBar from './components/NavigationSecondaryBar';
import Appetizers from './components/menuItems/Appetizers'

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
          <Route path="/appetizers">
            <Appetizers />
          </Route>
          <Route path="/burgers/sandwiches">
            <BurgersSandwiches />
          </Route>
          <Route path="/entrees">
            <Entrees />
          </Route>
          <Route path="/soups/salads">
            <SoupsSalads />
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
