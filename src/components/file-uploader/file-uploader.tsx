import * as React from 'react';
import styled from 'styled-components';
import grey from '@material-ui/core/colors/grey';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

interface FileUploaderProps {
  accept: string;
  className?: string;
  label: string;
  multiple?: boolean;
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Label = styled.label`
  align-items: center;
  border: 0.2rem dashed ${grey[300]};
  cursor: pointer;
  display: flex;
  padding: 1.6rem;
`;

const Input = styled.input`
  display: none;
`;

export const FileUploader: React.SFC<FileUploaderProps> = ({
  accept,
  className,
  label,
  multiple,
  name,
  onChange,
}) => (
  <Label className={className}>
    <Icon color="primary">attach_file</Icon>
    <Typography color="primary" variant="subheading">
      {label}
    </Typography>
    <Input
      accept={accept}
      multiple={!!multiple}
      type="file"
      onChange={onChange}
      name={name}
    />
  </Label>
);

FileUploader.displayName = 'FileUploader';
