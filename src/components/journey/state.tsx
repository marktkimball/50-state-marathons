import * as React from 'react';
import { statesTable } from 'app-constants';
import { Typography } from 'material-ui';

interface StateProps {
  code: string;
}

export const State: React.SFC<StateProps> = ({ code }) => {
  const state = statesTable[code];
  return (
    <div>
      <img src={require(`assets/state-icons/${state}.svg`)} />
      <Typography variant="headline">{state}</Typography>
    </div>
  );
};
