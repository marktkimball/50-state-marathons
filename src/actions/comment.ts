import * as moment from 'moment';
import { map } from 'lodash';
import { db, storageRef } from 'app-constants';
import { generateFileName, generateObjectFromArray } from 'utils';
import { Attachment } from 'interfaces';

export const createComment = (
  name: string,
  comment: string,
  photos?: File[],
  video?: File,
) =>
  Promise.all([
    ...map(photos, file => uploadFile('photo', file)),
    uploadFile('video', video),
  ]).then(filePromises => {
    const videoId = filePromises.pop();
    const photoIds = filePromises;

    db.collection('comments').add({
      comment,
      name,
      videoId: videoId || null,
      createdAt: moment().toISOString(),
      photoIds: photoIds ? generateObjectFromArray(photoIds) : null,
    });
  });

const uploadFile = (fileType: 'photo' | 'video', file?: File) => {
  if (file) {
    const fileName = generateFileName(file);
    return storageRef
      .child(`comments/${fileType}s/${fileName}`)
      .put(file)
      .then(data =>
        createAttachment({
          fileType,
          createdAt: moment().toISOString(),
          fileName: file.name,
          reference: data.metadata.fullPath,
          url: data.downloadURL,
        }),
      );
  }
  return;
};

const createAttachment = (attachment: Attachment): Promise<string> =>
  db
    .collection('attachments')
    .add(attachment)
    .then(({ id }) => id);
