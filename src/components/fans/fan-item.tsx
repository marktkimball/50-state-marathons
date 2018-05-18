import * as React from 'react';
import styled from 'styled-components';
import { find, get, keys } from 'lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { Attachment, Comment } from 'interfaces';

interface FanItemProps {
  attachments?: Attachment[];
  comment: Comment;
  openDialog(attachments: Attachment[]): void;
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
  cursor: pointer;
  height: 0;
  padding-top: 56.25%;
`;

const ButtonIcon = styled(Icon)`
  margin-right: 0.8rem;
`;

const VideoButton = styled(Button)`
  &:nth-of-type(2) {
    margin-left: 1.6rem;
  }
`;

export const FanItem: React.SFC<FanItemProps> = ({
  attachments,
  comment,
  openDialog,
}) => {
  const featuredAttachment = get(
    find(attachments, ({ fileType }) => fileType === 'photo'),
    'url',
  );
  const hasVideo = comment.videoId;
  const hasMultiplePhotos = keys(comment.photoIds).length >= 2;

  return (
    <MasonBlock>
      {attachments && attachments.length > 0 && featuredAttachment ? (
        <Media
          image={featuredAttachment}
          onClick={() => openDialog(attachments)}
        />
      ) : null}
      <CardContent>
        <Comment paragraph>{comment.comment}</Comment>
        <Typography align="right" variant="body2">
          {comment.name}
        </Typography>
        {attachments &&
          attachments.length > 0 && (
            <div>
              {featuredAttachment && (
                <Button
                  onClick={() => openDialog(attachments)}
                  size="small"
                  variant="raised"
                >
                  <ButtonIcon>
                    {hasMultiplePhotos ? 'photo_library' : 'photo'}
                  </ButtonIcon>
                  {`Photo${hasMultiplePhotos ? 's' : ''}`}
                </Button>
              )}
              {hasVideo && (
                <VideoButton
                  onClick={() => openDialog(attachments)}
                  size="small"
                  variant="raised"
                >
                  <ButtonIcon>videocam</ButtonIcon>Video
                </VideoButton>
              )}
            </div>
          )}
      </CardContent>
    </MasonBlock>
  );
};

FanItem.displayName = 'FanItem';
