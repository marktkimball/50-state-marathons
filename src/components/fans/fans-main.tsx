import * as React from 'react';
import styled from 'styled-components';
import { filter, get, keys, map } from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import grey from '@material-ui/core/colors/grey';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FanItem } from './';
import { Attachment, Comment } from 'interfaces';
import { getAttachments, getComments } from 'services';

interface FansMainState {
  attachments?: Attachment[];
  comments?: Comment[];
  dialogAttachments: Attachment[];
  dialogOpen: boolean;
  viewIndex: number;
}

const Masonary = styled.main`
  column-count: 1;
  column-gap: 1.6rem;
  padding: 0.8rem;

  @media only screen and (min-width: 1024px) {
    column-count: 3;
    padding: 10rem;
  }

  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 2;
    padding: 10rem;
  }
`;

const DialogHeading = styled(AppBar)`
  && {
    position: relative;
  }
`;

const DialogContentContainer = styled(DialogContent)`
  display: flex;
  justify-content: ${({
    hasMultipleAttachments,
  }: {
    hasMultipleAttachments: boolean;
  }) => (hasMultipleAttachments ? 'space-between' : 'center')};
  align-items: center;
`;

const DialogImage = styled.img`
  max-height: 50rem;
  max-width: 100%;
`;

const DialogVideo = styled.video`
  max-height: 50rem;
  max-width: 100%;
`;

const ChevronIcon = styled(Icon)`
  && {
    color: ${grey[500]};
    font-size: 4.8rem;
    transition: all 150ms ease-in-out;
  }
  :hover {
    color: ${grey[600]};
  }
`;

export class FansMain extends React.Component<{}, FansMainState> {
  static displayName = 'FanMain';

  state: FansMainState = {
    dialogAttachments: [],
    dialogOpen: false,
    viewIndex: 0,
  };

  componentWillMount() {
    getComments().then(comments => {
      this.setState({ comments });
    });
    getAttachments().then(attachments => {
      this.setState({ attachments });
    });
  }

  toggleDialog = (attachments?: Attachment[]) => {
    const { dialogOpen } = this.state;
    if (dialogOpen) {
      this.setState({ dialogAttachments: [], dialogOpen: false });
    } else {
      this.setState({
        dialogAttachments: attachments || [],
        dialogOpen: true,
      });
    }
  };

  setViewIndex = (method: 'increment' | 'decrement') => {
    const { dialogAttachments, viewIndex: currentViewIndex } = this.state;
    const attachmentsLength = dialogAttachments.length;
    if (method === 'increment') {
      if (currentViewIndex === attachmentsLength - 1) {
        this.setState({ viewIndex: 0 });
      } else {
        this.setState({ viewIndex: currentViewIndex + 1 });
      }
    } else if (method === 'decrement') {
      if (currentViewIndex === 0) {
        this.setState({ viewIndex: attachmentsLength - 1 });
      } else {
        this.setState({ viewIndex: currentViewIndex - 1 });
      }
    }
  };

  render() {
    const {
      attachments,
      comments,
      dialogAttachments,
      dialogOpen,
      viewIndex,
    } = this.state;
    const hasMultipleAttachments = dialogAttachments.length > 1;
    const attachmentInView = dialogAttachments[viewIndex];

    return (
      <Masonary>
        {map(comments, comment => {
          const commentAttachments =
            keys(comment.photoIds).length > 0 || comment.videoId
              ? filter(attachments, attachment => {
                  if (attachment.fileType === 'photo' && comment.photoIds) {
                    return !!comment.photoIds[attachment.id];
                  }
                  if (
                    attachment.fileType === 'video' &&
                    comment.videoId === attachment.id
                  ) {
                    return true;
                  }
                  return false;
                })
              : undefined;
          return (
            <FanItem
              key={comment.id}
              attachments={commentAttachments}
              comment={comment}
              openDialog={this.toggleDialog}
            />
          );
        })}
        {attachmentInView && (
          <Dialog
            fullScreen
            onClose={() => this.toggleDialog()}
            open={dialogOpen}
          >
            <DialogHeading>
              <Toolbar>
                <IconButton color="inherit" onClick={() => this.toggleDialog()}>
                  <Icon>close</Icon>
                </IconButton>
                <Typography variant="title" color="inherit">
                  Photos and Videos
                </Typography>
              </Toolbar>
            </DialogHeading>
            <DialogContentContainer
              hasMultipleAttachments={hasMultipleAttachments}
            >
              {hasMultipleAttachments && (
                <IconButton
                  color="inherit"
                  onClick={() => this.setViewIndex('decrement')}
                >
                  <ChevronIcon>chevron_left</ChevronIcon>
                </IconButton>
              )}
              <div>
                {attachmentInView.fileType === 'photo' ? (
                  <DialogImage
                    src={get(attachmentInView, 'url') || undefined}
                  />
                ) : (
                  <DialogVideo
                    controls
                    playsInline
                    src={get(attachmentInView, 'url') || undefined}
                  />
                )}
              </div>
              {hasMultipleAttachments && (
                <IconButton
                  color="inherit"
                  onClick={() => this.setViewIndex('increment')}
                >
                  <ChevronIcon>chevron_right</ChevronIcon>
                </IconButton>
              )}
            </DialogContentContainer>
          </Dialog>
        )}
      </Masonary>
    );
  }
}
