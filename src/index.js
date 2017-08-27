import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NotFound from './common/NotFound';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <h1>Dexio</h1>
                <p>Enterprise Knowledge Sharing</p>
            </MuiThemeProvider>
        );
    }
}

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
