import { db } from 'app-constants';
import { Comment } from 'interfaces';

export const getComments = (): Promise<Comment[]> =>
  db
    .collection('comments')
    .orderBy('createdAt')
    .get()
    .then(querySnapshot => {
      const comments: Comment[] = [];
      querySnapshot.forEach(doc => {
        comments.push(doc.data() as Comment);
      });
      return comments;
    })
    .catch(() => {
      console.info('ERROR GETTING COMMENTS');
      return [];
    });
