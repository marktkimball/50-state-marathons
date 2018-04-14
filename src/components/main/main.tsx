import * as React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const california = require('assets/images/california.jpg');

interface MainComponentProps {
  classes: any;
}

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 0.2rem',
    transform: 'scale(0.8)',
  },
  caption: {
    textAlign: 'center' as 'center',
  },
  indent: {
    marginLeft: '1.6rem',
    marginBottom: '1.6rem',
  },
  media: {
    backgroundPosition: 'top',
    height: '60rem',
  },
  pos: {
    fontStyle: 'italic' as 'italic',
  },
  variant: {
    fontWeight: 600 as 600,
  },
};

const MainComponent: React.SFC<MainComponentProps> = ({ classes }) => {
  const bullet = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={8}>
        <Card>
          <CardMedia
            className={classes.media}
            image={california}
            title="San Francisco, CA - 1979"
          />
          <CardContent>
            <Typography className={classes.caption} variant="caption">
              San Francisco, CA - 1979
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
              mar{bullet}a{bullet}thon
            </Typography>
            <Typography>/ˈmerəˌTHän/</Typography>
            <Typography className={classes.pos}>noun</Typography>
            <Typography color="textSecondary">
              noun: <span className={classes.variant}>marathon</span>; plural
              noun: <span className={classes.variant}>marathons</span>
            </Typography>
            <Typography className={classes.indent}>
              a long-distance running race, strictly one of 26 miles and 385
              yards (42.195 km).
            </Typography>
            <Typography color="textSecondary">Origin</Typography>
            <Typography color="textSecondary">
              Marathōn -----> marathon
            </Typography>
            <Typography className={classes.indent}>
              late 19th century: from Marathōn in Greece, the scene of a victory
              over the Persians in 490 BC; the modern race is based on the
              tradition that a messenger ran from Marathon to Athens (22 miles)
              with the news. The original account by Herodotus told of the
              messenger Pheidippides running 150 miles from Athens to Sparta
              before the battle, seeking help.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

MainComponent.displayName = 'Main';

export const Main = withStyles(styles)<{}>(MainComponent);
