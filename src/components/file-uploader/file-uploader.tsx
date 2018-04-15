import * as React from 'react';
import grey from 'material-ui/colors/grey';
import Icon from 'material-ui/Icon';
import { withStyles, WithStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';

interface FileUploaderProps {
  accept: string;
  label: string;
  multiple?: boolean;
  name: string;
  onChange(): void;
}

const styles = {
  fileUpload: {
    alignItems: 'center',
    border: `0.1rem dashed ${grey[300]}`,
    cursor: 'pointer',
    display: 'flex',
    padding: '1.6rem',
  },
  input: {
    display: 'none',
  },
};

type PropsWithStyles = FileUploaderProps & WithStyles<'fileUpload' | 'input'>;

export const FileUploaderComponent: React.SFC<PropsWithStyles> = ({
  accept,
  classes,
  label,
  multiple,
  name,
  onChange,
}) => (
  <label className={classes.fileUpload}>
    <Icon>attach_file</Icon>
    <Typography variant="subheading">{label}</Typography>
    <input
      accept={accept}
      className={classes.input}
      multiple={!!multiple}
      type="file"
      onChange={onChange}
      name={name}
    />
  </label>
);

export const FileUploader = withStyles(styles)<FileUploaderProps>(
  FileUploaderComponent,
);

FileUploader.displayName = 'FileUploader';
