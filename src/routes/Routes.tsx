import React from 'react';
import { HashRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/landing-page/LandingPage';
import NavBar from '../components/layout/navbar/NavBar';
import ProductListingPage from '../pages/product-listing-page/ProductListingPage';
import ShoppingCartPage from '../pages/shopping-cart-page/ShoppingCatPage';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/product-listing' element={<><NavBar /><ProductListingPage /></>} />
        <Route path='/shopping-cart' element={<><NavBar/><ShoppingCartPage /></>} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
