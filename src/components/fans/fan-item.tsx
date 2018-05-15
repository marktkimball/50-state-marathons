import * as React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Attachment, Comment } from 'interfaces';

interface FanItemProps {
  attachments?: Attachment[];
  comment: Comment;
}

const MasonBlock = styled(Card)`
  display: inline-block;
  margin-bottom: 2.4rem;
  width: 100%;
`;

const Comment = styled(Typography)`
  white-space: pre-wrap;
`;

const Media = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

export const FanItem: React.SFC<FanItemProps> = ({ attachments, comment }) => {
  console.info(
    'ATTACHMENTS:',
    attachments,
    comment.name,
    get(attachments, `[0].url`, null),
  );
  return (
    <MasonBlock>
      {attachments && <Media image={get(attachments, `[0].url`, null)} />}
      <CardContent>
        <Comment paragraph>{comment.comment}</Comment>
        <Typography align="right" variant="body2">
          {comment.name}
        </Typography>
      </CardContent>
    </MasonBlock>
  );
};

FanItem.displayName = 'FanItem';
