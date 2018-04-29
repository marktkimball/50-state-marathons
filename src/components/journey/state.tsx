import * as React from 'react';
import * as moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { statesTable } from 'app-constants';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import { Typography } from 'material-ui';
interface StateProps {
  code: string;
  stats: {
    city: string;
    count: number;
    date: string;
    nextState: string;
    prevState: string;
    review?: string;
    state: string;
    time?: string;
  };
}

const StateContainer = styled(Grid)`
  margin: 16rem 0 0 -16rem;
`;

const StatsContainer = styled.div`
  padding: 0 3.2rem;
`;

const StateImage = styled.img`
  background: ${blue[500]};
  border-radius: 50%;
  box-shadow: 0 1.9rem 3.8rem rgba(0, 0, 0, 0.3),
    0 1.5rem 1.2rem rgba(0, 0, 0, 0.22);
  max-width: 33.2rem;
  width: 100%;
`;

const StateHeader = styled.h1`
  font-size: 5.2rem;
  line-height: 7.2rem;
  margin: 0;
`;

const Underline = styled(Divider)`
  && {
    background: ${blue[200]};
    height: 0.4rem;
    margin-bottom: 2.4rem;
    width: 9.2rem;
  }
`;

const StatRow = styled(Typography)`
  && {
    margin: 3.2rem 0;
  }
`;

const NavBlock = styled.div`
  margin: 4rem 0 0 8.6rem;
`;

const NavIcon = styled(Icon)`
  && {
    color: ${grey[500]};
    margin: 0 2.4rem;
    transition: all 300ms ease-in-out;
  }
  :hover {
    color: ${grey[600]};
  }
`;

export const State: React.SFC<StateProps> = ({ code, stats }) => {
  const state = statesTable[code];

  return (
    <>
      <StateContainer container>
        <Grid item xs={12} sm={6}>
          <StateImage
            alt={state}
            src={require(`assets/state-icons/${code}.svg`)}
          />
          <NavBlock>
            <Link to={`/journey/${stats.prevState}`}>
              <NavIcon>chevron_left</NavIcon>
            </Link>
            <Link to={`/journey/${stats.nextState}`}>
              <NavIcon>chevron_right</NavIcon>
            </Link>
          </NavBlock>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StatsContainer>
            <StateHeader>{state}</StateHeader>
            <Underline />
            <StatRow>
              <Typography variant="title">City: </Typography>
              {stats.city}
            </StatRow>
            <StatRow>
              <Typography variant="title">Date: </Typography>
              {moment(stats.date).format('MMMM DD, YYYY')}
            </StatRow>
          </StatsContainer>
        </Grid>
      </StateContainer>
    </>
  );
};
