import docments from '@/public/data/document.json';

export interface Document {
  id: number;
  title: string;
  content: string;
  language: string;
  updatedAt: string;
}

export const documents: Document[] = docments;