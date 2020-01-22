import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Menu.js';
import Contact from './Contact';
import About from './About';
import Carousel from './Carousel';
// import pk  from './pk'
import Login from './Login';
import Signup from './Signup'
import post from './post';
import cart from './Cart'
// import add from './add'
function App() {

  return (
    <BrowserRouter>

      <Menu />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Signup' component={Signup} />
        <Route path='/Contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/Login' component={Login} />
        <Route path='/postadd' component={post} />
        <Route path='/Cart' component={cart} />

        {/* <Route path='/add' component={add}/>  */}
        <Route component={Noo} />
        {/* Agar koi sa bhi page(component na milay to ye run hoiga) */}
      </Switch>
    </BrowserRouter>
  );
}
const Home = () => {

  return (
    <div>
      <Carousel />
    </div>
  )
}
//Error Page
const Noo = () => {

  return (
    <div>
      <h2>404 Page not founddddddd</h2>
    </div>
  )
}
export default App;
