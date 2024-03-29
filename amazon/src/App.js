import React, { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
            dispatch({
              type: "SET_USER",
              user: authUser,
            })
        
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    });

  }, []);
  return (
    //BEM
    <Router>
    
    <div className="app">

  
      <Switch>
        <Route path="/login">
          <Header />
          <Login />
         </Route>
        
      <Route path="/checkout">
           <Checkout /> 
         </Route>
        
        <Route path="/">
          <Header />
           <Home /> 
         </Route>
      </Switch>

     {/*HOME*/}
    </div>
    </Router>
  );
}

export default App;
