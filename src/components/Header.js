import React from 'react';
import { AppBar, Typography, Toolbar, Button } from 'material-ui';
import APP from '../config/constants';

const Header = () => (
  <header>
    <AppBar>
      <Toolbar>
        <Typography type="display1" color="inherit">
          {APP.brand}
        </Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
  </header>
);

export default Header;
