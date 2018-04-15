import * as React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { withStyles, WithStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import { FileUploader } from 'components/file-uploader';

interface CommentFormState {
  comment: string;
  name: string;
}

const decorate = withStyles(() => ({
  container: {
    padding: '3.2rem 1.6rem',
  },
}));

export const CommentForm = decorate<{}>(
  class CommentFormComponent extends React.Component<
    WithStyles<'container'>,
    CommentFormState
  > {
    static displayName = 'CommentForm';

    state = {
      comment: '',
      name: '',
    };

    handleChange = (field: string) => (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => this.setState({ ...this.state, [field]: event.target.value });

    render() {
      const { classes } = this.props;
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
            value={this.state.name}
          />
          <TextField
            fullWidth
            label="Add your congratulations by writing a few lines"
            margin="normal"
            multiline
            onChange={this.handleChange('comment')}
            placeholder="Personal comment or congratulations"
            required
            value={this.state.comment}
          />
          <FileUploader
            accept="image/*"
            label="Add a photo"
            multiple
            name="photos"
            onChange={() => {}}
          />
          <FileUploader
            accept="video/mp4,video/x-m4v,video/*"
            label="Add a video"
            name="video"
            onChange={() => {}}
          />
        </Paper>
      );
    }
  },
);
