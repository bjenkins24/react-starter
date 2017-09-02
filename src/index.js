import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.querySelector('.container'));
