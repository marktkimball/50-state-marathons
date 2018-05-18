import { get, map } from 'lodash';
import { db, storageRef } from 'app-constants';
import { generateFileName, generateObjectFromArray } from 'utils';
import { Attachment } from 'interfaces';

export const createComment = (
  name: string,
  comment: string,
  photos?: File[],
  video?: FileList,
) =>
  Promise.all([
    ...map(photos, file => uploadFile('photo', file)),
    uploadFile('video', get(video, '[0]', null)),
  ]).then(filePromises => {
    const videoId = filePromises.pop();
    const photoIds = filePromises;
    const newCommentRef = db.collection('comments').doc();

    newCommentRef.set({
      comment,
      name,
      id: newCommentRef.id,
      videoId: videoId || null,
      createdAt: new Date().toISOString(),
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
        storageRef
          .child(data.metadata.fullPath)
          .getDownloadURL()
          .then(url =>
            createAttachment({
              fileType,
              url,
              createdAt: new Date().toISOString(),
              fileName: file.name,
              reference: data.metadata.fullPath,
            }),
          ),
      );
  }
  return;
};

const createAttachment = (attachment: Partial<Attachment>): Promise<string> => {
  const newAttachmentRef = db.collection('attachments').doc();
  const id = newAttachmentRef.id;
  return newAttachmentRef.set({ ...attachment, id }).then(() => id);
};
