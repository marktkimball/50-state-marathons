import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const EmptyPanel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 9.6rem auto;
  max-width: 60vw;
`;

const IconButton = styled(Button)`
  && {
    border-radius: 50%;
    margin-bottom: 4.8rem;
    padding: 4.8rem;
  }
`;

const ButtonIcon = styled(Icon)`
  && {
    font-size: 4.8rem;
  }
`;

const SpacedTypo = styled(Typography)`
  && {
    margin-bottom: 2.4rem;
  }
`;

export const Empty: React.SFC<RouteComponentProps<{}>> = ({
  history: { push },
}) => (
  <EmptyPanel>
    <IconButton
      color="primary"
      onClick={() => push('/comment')}
      variant="raised"
    >
      <ButtonIcon>warning</ButtonIcon>
    </IconButton>
    <SpacedTypo variant="headline">There are no comments yet!</SpacedTypo>
    <SpacedTypo variant="subheading">
      Help make Tom's 50th state celebration special by adding your personalized
      comment.
    </SpacedTypo>
    <Button color="primary" onClick={() => push('/comment')} variant="raised">
      Create a Comment
    </Button>
  </EmptyPanel>
);

export const EmptyComments = withRouter(Empty);

EmptyComments.displayName = 'EmptyComments';
