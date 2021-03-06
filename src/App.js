import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
        // this will run once and if  we put something in array that it will run if the state gets 
        //change of that in array
        auth.onAuthStateChanged(authUser => {
          console.log('The user is >>>>', authUser);
          if(authUser){
             // the user logged in or was
             dispatch({
               type: 'SET_USER',
               user: authUser
             })
          }else {
            // user is logged out
            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        })
  }, [])

  return (
    <Router>
    <div className="app">
     
      <Switch>
        <Route path="/login">
           <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/">
        <Header/>
       <Home/>
        </Route>
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;
