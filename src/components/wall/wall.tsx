import * as React from 'react';
import { map } from 'lodash';
import Grid from 'material-ui/Grid';
import { WallItem } from './';
import { Comment } from 'interfaces';
import { getComments } from 'services';

interface WallProps {}

interface WallState {
  comments: Comment[];
}

export class Wall extends React.Component<WallProps, WallState> {
  static displayName = 'Wall';

  state = {
    comments: [],
  };

  componentWillMount() {
    getComments().then(comments => {
      this.setState({ comments });
    });
  }

  render() {
    return (
      <Grid container>
        {map(this.state.comments, comment => (
          <WallItem key={comment.id} comment={comment} />
        ))}
      </Grid>
    );
  }
}
