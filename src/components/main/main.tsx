import * as React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

interface MainComponentProps {
  classes: any;
}

const styles = {
  bullet: {
    display: 'inline-block',
    margin: '0 0.2rem',
    transform: 'scale(0.8)',
  },
  indent: {
    marginLeft: '1.6rem',
    marginBottom: '1.6rem',
  },
  main: {
    margin: '10rem',
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
    <main className={classes.main}>
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
            a long-distance running race, strictly one of 26 miles and 385 yards
            (42.195 km).
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
    </main>
  );
};

MainComponent.displayName = 'Main';

export const Main = withStyles(styles)(MainComponent);
