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

export const generateFileName = (file: File) =>
  `${(Math.random() * 1e10) | 0}-${Date.now()}-${file.name}`;

export const generateObjectFromArray = (arr: string[]) =>
  reduce(
    arr,
    (obj, id) => {
      obj[id] = true;
      return obj;
    },
    {},
  );
