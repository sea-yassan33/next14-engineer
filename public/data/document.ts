import docments from '@/public/data/document.json';

export interface Document {
  id: number;
  title: string;
  language: string;
  content: string;
  updatedAt: string;
}

export const documents: Document[] = docments;