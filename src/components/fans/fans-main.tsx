import * as React from 'react';
import styled from 'styled-components';
import { filter, keys, map } from 'lodash';
import { FanItem } from './';
import { Attachment, Comment } from 'interfaces';
import { getAttachments, getComments } from 'services';

interface FansMainProps {}

interface FansMainState {
  attachments?: Attachment[];
  comments?: Comment[];
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

export class FansMain extends React.Component<FansMainProps, FansMainState> {
  static displayName = 'FanMain';

  state: FansMainState = {};

  componentWillMount() {
    getComments().then(comments => {
      this.setState({ comments });
    });
    getAttachments().then(attachments => {
      this.setState({ attachments });
    });
  }

  render() {
    const { attachments, comments } = this.state;
    return (
      <Masonary>
        {map(comments, comment => {
          const commentAttachments =
            keys(comment.photoIds).length > 0
              ? filter(attachments, attachment => {
                  if (comment.photoIds) {
                    return !!comment.photoIds[attachment.id];
                  }
                  return false;
                })
              : undefined;
          return (
            <FanItem
              key={comment.id}
              attachments={commentAttachments}
              comment={comment}
            />
          );
        })}
      </Masonary>
    );
  }
}
