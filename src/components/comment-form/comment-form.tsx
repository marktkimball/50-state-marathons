import * as React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FileUploader } from 'components/file-uploader';
import { getFileNames } from 'utils';
import { createComment } from 'actions';

interface CommentFormState {
  comment: string;
  errors: {
    comment?: string;
    name?: string;
  };
  isSubmitting: boolean;
  name: string;
  open: boolean;
  photoInput: HTMLInputElement | null;
  videoInput: HTMLInputElement | null;
}

const StyledMain = styled.main`
  padding: 0.8rem;

  @media (min-width: 769px) {
    padding: 10rem;
  }
`;

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
    errors: {},
    isSubmitting: false,
    name: '',
    open: false,
    photoInput: null,
    videoInput: null,
  };

  handleTextFieldChange = (field: string) => (
    event: React.FormEvent<HTMLInputElement>,
  ) => this.setState({ ...this.state, [field]: event.currentTarget.value });

  handleUploaderChange = (field: string) => (
    event: React.FormEvent<HTMLInputElement>,
  ) => this.setState({ ...this.state, [field]: event.currentTarget });

  handleSubmit = () => {
    this.setState({ isSubmitting: true });
    const isValid = this.validateRequiredFields();
    if (isValid) {
      const { comment, name, photoInput, videoInput } = this.state;
      createComment(
        name,
        comment,
        get(photoInput, 'files'),
        get(videoInput, 'files'),
      )
        .then(() => {
          this.setState({ open: true });
          this.resetState();
        })
        .catch(error => {
          this.setState({ isSubmitting: false });
        });
    }
  };

  validateRequiredFields = (): boolean => {
    const { comment, name } = this.state;
    const errorMessage = 'This field is required';
    const errors = {
      comment: '',
      name: '',
    };
    if (!comment) {
      errors.comment = errorMessage;
    }
    if (!name) {
      errors.name = errorMessage;
    }
    this.setState({ errors });

    return !errors.comment && !errors.name;
  };

  resetState = () =>
    this.setState({
      comment: '',
      errors: {},
      isSubmitting: false,
      name: '',
      photoInput: null,
      videoInput: null,
    });

  render() {
    const { comment, errors, isSubmitting, open, name } = this.state;
    const commentError = get(errors, 'comment');
    const nameError = get(errors, 'name');

    return (
      <StyledMain>
        <Container>
          <Typography paragraph variant="headline">
            Tom is about to run his 50th state in Montana! Let's celebrate!
          </Typography>
          <Typography paragraph>
            We invite you to add a message that display in a virtual
            presentation we are creating for Tom. Whether it is a brief note of
            congratulations, a shared store or memory, or a few lines paying
            tribute to Tom, each comment adds to this incredibly personal,
            powerful, and memorable experience.
          </Typography>
          <TextField
            disabled={isSubmitting}
            error={!!nameError}
            fullWidth
            helperText={nameError}
            label="Name"
            margin="normal"
            onChange={this.handleTextFieldChange('name')}
            placeholder="Your full name"
            required
            value={name}
          />
          <TextField
            disabled={isSubmitting}
            error={!!commentError}
            fullWidth
            helperText={commentError}
            label="Add your congratulations by writing a few lines"
            margin="normal"
            multiline
            onChange={this.handleTextFieldChange('comment')}
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
            onChange={this.handleUploaderChange('photoInput')}
          />
          <StyledFileUploader
            accept="video/mp4,video/x-m4v,video/*"
            label={
              !!this.state.videoInput
                ? getFileNames(get(this, 'state.videoInput.files'))
                : 'Add a video (optional)'
            }
            name="video"
            onChange={this.handleUploaderChange('videoInput')}
          />
          <SubmitButton
            color="primary"
            disabled={isSubmitting}
            onClick={this.handleSubmit}
            variant="raised"
          >
            Submit
          </SubmitButton>
        </Container>
        <Snackbar
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          autoHideDuration={6000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Successfully created comment!</span>}
          open={open}
        />
      </StyledMain>
    );
  }
}
