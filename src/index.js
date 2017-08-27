import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NotFound from './components/NotFound';
import Header from './components/Header';

const App = () => (
  <MuiThemeProvider>
    <Header />
  </MuiThemeProvider>
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
