import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {PATH} from '../../utils/constants/routeConstants';
import {LayoutVariant} from '../../utils/constants/LayoutVariantEnum';

import Home from '../home/Home';
import Fraijour from '../fraijour/Fraijour';
import Layout from '../../components/layout/Layout';
import LineProduct from '../lineProduct/LineProduct';
import Product from '../product/Product';

export const App: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route
        path={PATH.home}
        element={
          <Layout variant={LayoutVariant.Main}>
            <Home/>
          </Layout>
        }
      />
      <Route
        path={PATH.fraijour}
        element={
          <Layout variant={LayoutVariant.Brand}>
            <Fraijour />
          </Layout>
        }
      />

      <Route
        path={'/:lineProduct'}
        element={
          <Layout variant={LayoutVariant.Brand}>
            <LineProduct />
          </Layout>
        }
      />

      <Route
        path={'/:lineProduct/:product'}
        element={
          <Layout variant={LayoutVariant.Brand}>
            <Product />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
