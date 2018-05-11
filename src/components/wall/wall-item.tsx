import * as React from 'react';
import Grid from 'material-ui/Grid';
import { Comment } from 'interfaces';

interface WallItemProps {
  comment: Comment;
}

export const WallItem: React.SFC<WallItemProps> = ({ comment }) => {
  return (
    <Grid item lg={2} md={4} sm={6} xs={12}>
      {comment.comment}
    </Grid>
  );
};

WallItem.displayName = 'WallItem';
