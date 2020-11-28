import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import Directions from './components/Directions'
import OrderOnline from './components/OrderOnline'
import OurStaff from './components/OurStaff'
import MenuPDF from './components/MenuPDF'
import Burgers from './components/menuItems/Burgers'
import Sides from './components/menuItems/Sides'
import Desserts from './components/menuItems/Desserts'
import Specials from './components/menuItems/Specials'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {

  const [order, setOrder] = useState([]);
  let [stateSwitch, setStateSwitch] = useState(false) 

  useEffect(() => {
    
  }, [stateSwitch]);
  return (
    <div className="App" style={{backgroundColor: "maroon"}}>
      <Router>
        <NavigationBar order={order} />
        <Switch>
          <Route path="/directions">
            <Directions />
          </Route>
          <Route path="/ourStaff">
            <OurStaff />
            </Route>
          <Route path="/orderOnline">
            <OrderOnline order={order}
            setOrder={setOrder}/>
          </Route>
          <Route path="/menuPDF">
            <MenuPDF />
          </Route>
          <Route path="/desserts">
            <Desserts order={order}
              setOrder={setOrder}
              stateSwitch={stateSwitch}
              setStateSwitch={setStateSwitch}/>
          </Route>
          <Route path="/burgers">
            <Burgers order={order}
              setOrder={setOrder}
              stateSwitch={stateSwitch}
              setStateSwitch={setStateSwitch}
              />
          </Route>
          <Route path="/sides">
            <Sides order={order}
              setOrder={setOrder}
              stateSwitch={stateSwitch}
              setStateSwitch={setStateSwitch}/>
          </Route>
          <Route path="/specials">
            <Specials order={order}
              setOrder={setOrder}
              stateSwitch={stateSwitch}
              setStateSwitch={setStateSwitch}/>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
