import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from './common/NotFound';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Dexio</h1>
                <p>Enterprise Knowledge Sharing</p>
            </div>
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
