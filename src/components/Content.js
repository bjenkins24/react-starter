import React from 'react';
import { Grid } from 'material-ui';
import { teal } from 'material-ui/colors';

import Card from './Card';

const Content = () => (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6} md={3}>
        <Card image="http://lorempixel.com/400/200?1" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card image="http://lorempixel.com/400/200?2" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card image="http://lorempixel.com/400/200?3" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card image="http://lorempixel.com/400/200?4" />
      </Grid>
    </Grid>
  </div>
);

export default Content;
