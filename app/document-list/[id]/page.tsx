"use client";
import { useParams } from 'next/navigation';
import { documents } from '@/public/data/document';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { tv } from 'tailwind-variants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const DocumentDetail = () => {
  const twStayles = tv({
    variants: {
      style: {
        // レスポンシブなpaddingを設定
        container:
          "bg-white text-gray-800 flex flex-col justify-center items-center mb-6 px-4 sm:px-6 lg:px-8", 
        // モバイル画面ではフル幅、上位画面サイズでは幅を縮小
        content:
          "w-full sm:w-[90%] md:w-[80%] lg:w-[60%] bg-white shadow-lg p-4 sm:p-6 lg:p-8 box-border", 
      },
    },
  });

  const params = useParams();
  const id = params.id;

  // IDからドキュメントを取得
  const document = documents.find((doc) => doc.id === Number(id));

  // ドキュメントが存在しない場合
  if (!document) {
    return <p className="text-center text-gray-600">ドキュメントが見つかりませんでした。</p>;
  }

  return (
    <div className={twStayles({style:'container'})}>
      <div className={twStayles({style:'content'})}>
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-center">{document.title}</h1>
          <div className="text-center text-gray-600">
            <h2 className="text-lg sm:text-xl">言語: {document.language}</h2>
            <h2 className="text-lg sm:text-xl">更新日: {document.updatedAt}</h2>
          </div>
          <Link href="/document-list">
            <Button variant="secondary" className='m-2'>一覧に戻る</Button>
          </Link>
        </header>
        <section className="prose max-w-none prose-sm sm:prose lg:prose-lg">
          <Markdown remarkPlugins={[remarkGfm]}>
            {document.content}
          </Markdown>
        </section>
      </div>  
    </div>
  );
};

export default DocumentDetail;
