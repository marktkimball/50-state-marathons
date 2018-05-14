import { db } from 'app-constants';
import { Attachment } from 'interfaces';

export const getAttachments = (): Promise<Attachment[]> =>
  db
    .collection('attachments')
    .orderBy('createdAt')
    .get()
    .then(querySnapshot => {
      const attachments: Attachment[] = [];
      querySnapshot.forEach(doc => {
        attachments.push(doc.data() as Attachment);
      });
      return attachments;
    })
    .catch(() => {
      console.info('ERROR GETTING COMMENTS');
      return [];
    });
