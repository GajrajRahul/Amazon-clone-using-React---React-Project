import React, {useEffect} from 'react';
import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './redux/action';
import { auth } from './utils/firebase';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Checkout from './pages/Checkout/Checkout';
import Payment from "./pages/Payment/Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './pages/Orders/Orders';

const promise = loadStripe(
  "pk_test_51MIRcqSHEzvpF86QSUGwIJrTuf5gJCRllUJKFdcHkoOczBd3psZKqoZVmrDIaB0rIyt1QygRcFJUX8l6GDlEehDu00kDrxsG8f"
);

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if(authUser) {
        dispatch(setUser(authUser));
      }
      else {
        dispatch(setUser(null));
      }
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/product/:id">
            <Header />
            <SingleProduct />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
