export interface Comment {
  comment: string;
  id: string;
  name: string;
  photoIds?: {
    [id: string]: true;
  };
  videoId?: string;
}
