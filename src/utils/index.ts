import { reduce } from 'lodash';

export const getFileNames = (fileList: FileList) =>
  reduce(
    fileList,
    (accNames, { name }, index) => {
      if (index === 0) {
        return name;
      }
      return `${accNames}, ${name}`;
    },
    '',
  );
