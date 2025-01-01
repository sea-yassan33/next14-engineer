// 汎用的なDocumentインターフェース
export interface Document {
  id: number;
  title: string;
  language: string;
  content: string;
  updatedAt: string;
}

// ドキュメントリスト用のPropsインターフェース
export interface DocumentListProps {
  documents: Document[]; // ドキュメントの配列
  num: number;           // 表示する数などの指定
  id_flag?: boolean;     // 任意のIDフラグ
}