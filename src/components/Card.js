import React from 'react';
import { Typography, Card as MUCard, CardActions, CardContent, CardMedia, Button } from 'material-ui/';
import { withStyles } from 'material-ui/styles';

const styles = {
  media: {
    height: 200,
  },
};

const Card = (props) => {
  const classes = props.classes;
  return (
    <MUCard>
      <CardMedia
        className={classes.media}
        image="http://lorempixel.com/400/200"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography type="headline" component="h2">
          Lizard
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button dense color="primary">
          Share
        </Button>
        <Button dense color="primary">
          Learn More
        </Button>
      </CardActions>
    </MUCard>
  );
};

export default withStyles(styles)(Card);
