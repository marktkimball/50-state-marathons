import * as React from 'react';
import styled from 'styled-components';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const california = require('assets/images/california.jpg');

const StyledMain = styled.main`
  padding: 0.8rem;

  @media (min-width: 769px) {
    padding: 10rem;
  }
`;

const Bullet = styled.span`
  display: inline-block;
  margin: 0 0.2rem;
  transform: scale(0.8);
`;

const Caption = styled(Typography)`
  text-align: center;
`;

const IndentTypography = styled(Typography)`
  margin-left: 1.6rem;
  margin-bottom: 1.6rem;
`;

const Media = styled(CardMedia)`
  && {
    background-position: top;
    height: 60rem;
  }
`;

const ItalicTypography = styled(Typography)`
  font-style: italic;
`;

const Variant = styled.span`
  font-weight: 600;
`;

export const Main: React.SFC<{}> = () => {
  const bullet = <Bullet>•</Bullet>;

  return (
    <StyledMain>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={8}>
          <Card>
            <Media image={california} title="San Francisco, CA - 1979" />
            <CardContent>
              <Caption variant="caption">San Francisco, CA - 1979</Caption>
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
              <ItalicTypography>noun</ItalicTypography>
              <Typography color="textSecondary">
                noun: <Variant>marathon</Variant>; plural noun:{' '}
                <Variant>marathons</Variant>
              </Typography>
              <IndentTypography>
                a long-distance running race, strictly one of 26 miles and 385
                yards (42.195 km).
              </IndentTypography>
              <Typography color="textSecondary">Origin</Typography>
              <Typography color="textSecondary">
                Marathōn -----> marathon
              </Typography>
              <IndentTypography>
                late 19th century: from Marathōn in Greece, the scene of a
                victory over the Persians in 490 BC; the modern race is based on
                the tradition that a messenger ran from Marathon to Athens (22
                miles) with the news. The original account by Herodotus told of
                the messenger Pheidippides running 150 miles from Athens to
                Sparta before the battle, seeking help.
              </IndentTypography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledMain>
  );
};

Main.displayName = 'Main';
