import * as React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Typography } from 'material-ui';
import { FileUploader } from 'components/file-uploader';
import { getFileNames } from 'utils';

interface CommentFormState {
  comment: string;
  name: string;
  photoInput: HTMLInputElement | null;
  videoInput: HTMLInputElement | null;
}

const Container = styled(Paper)`
  padding: 3.2rem 1.6rem;
`;

const StyledFileUploader = styled(FileUploader)`
  margin-top: 3.2rem;
`;

const SubmitButton = styled(Button)`
  && {
    margin-top: 3.2rem;
  }
`;

export class CommentForm extends React.Component<{}, CommentFormState> {
  static displayName = 'CommentForm';

  state = {
    comment: '',
    name: '',
    photoInput: null,
    videoInput: null,
  };

  handleChange = (field: string) => (
    event: React.FormEvent<HTMLInputElement>,
  ) => this.setState({ ...this.state, [field]: event.currentTarget });

  render() {
    const { comment, name } = this.state;
    return (
      <Container>
        <Typography paragraph variant="headline">
          Tom is about to run his 50th state in Montana! Let's celebrate!
        </Typography>
        <Typography paragraph>
          We invite you to add a message that display in a virtual presentation
          we are creating for Tom. Whether it is a brief note of
          congratulations, a shared store or memory, or a few lines paying
          tribute to Tom, each comment adds to this incredibly personal,
          powerful, and memorable experience.
        </Typography>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          onChange={this.handleChange('name')}
          placeholder="Your full name"
          required
          value={name}
        />
        <TextField
          fullWidth
          label="Add your congratulations by writing a few lines"
          margin="normal"
          multiline
          onChange={this.handleChange('comment')}
          placeholder="Personal comment or congratulations"
          required
          value={comment}
        />
        <StyledFileUploader
          accept="image/*"
          label={
            !!this.state.photoInput
              ? getFileNames(get(this, 'state.photoInput.files'))
              : 'Add a photo (optional)'
          }
          multiple
          name="photos"
          onChange={this.handleChange('photoInput')}
        />
        <StyledFileUploader
          accept="video/mp4,video/x-m4v,video/*"
          label={
            !!this.state.videoInput
              ? getFileNames(get(this, 'state.videoInput.files'))
              : 'Add a video (optional)'
          }
          name="video"
          onChange={this.handleChange('videoInput')}
        />
        <SubmitButton color="primary" variant="raised">
          Submit
        </SubmitButton>
      </Container>
    );
  }
}
