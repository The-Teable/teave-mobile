/**
 * 백엔드와 협의가 필요한 스키마
 */
export interface Article {
  id: string;
  title: string;
  author: string;
  create_date: string;
  content: string;
}

export type ReviewProps = Article & { image_url: string };

export type QuestionProps = Article & { isCompleted: boolean };
