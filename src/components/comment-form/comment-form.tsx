import * as React from 'react';
import { get } from 'lodash';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { withStyles, WithStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import { FileUploader } from 'components/file-uploader';
import { getFileNames } from 'utils';

interface CommentFormState {
  comment: string;
  name: string;
  photoInput: HTMLInputElement | null;
  videoInput: HTMLInputElement | null;
}

const decorate = withStyles(() => ({
  container: {
    padding: '3.2rem 1.6rem',
  },
  fileUploader: {
    marginTop: '3.2rem',
  },
}));

export const CommentForm = decorate<{}>(
  class CommentFormComponent extends React.Component<
    WithStyles<'container' | 'fileUploader'>,
    CommentFormState
  > {
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
      const { classes } = this.props;
      const { comment, name } = this.state;
      return (
        <Paper className={classes.container}>
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
          <FileUploader
            accept="image/*"
            className={classes.fileUploader}
            label={
              !!this.state.photoInput
                ? getFileNames(get(this, 'state.photoInput.files'))
                : 'Add a photo'
            }
            multiple
            name="photos"
            onChange={this.handleChange('photoInput')}
          />
          <FileUploader
            accept="video/mp4,video/x-m4v,video/*"
            className={classes.fileUploader}
            label={
              !!this.state.videoInput
                ? getFileNames(get(this, 'state.videoInput.files'))
                : 'Add a video'
            }
            name="video"
            onChange={this.handleChange('videoInput')}
          />
        </Paper>
      );
    }
  },
);
