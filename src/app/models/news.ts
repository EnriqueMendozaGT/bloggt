export interface News {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishDate: Date;
  imageUrl: string;
  category: string;
  tags: string[];
  views: number;
  featured: boolean;
}
