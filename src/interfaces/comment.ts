export interface Comment {
  comment: string;
  name: string;
  photoIds?: {
    [id: string]: true;
  };
  videoId?: string;
}
