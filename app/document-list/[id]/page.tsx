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
      style:{
        contant01:'bg-white text-gray-800 flex justify-center items-start mb-6',
        contant02:'sm:min-w-[210mm] bg-white shadow-lg p-6 box-border',
      },
    },
  });

  const params = useParams();
  const id = params.id;

  // IDからドキュメントを取得
  const document = documents.find((doc) => doc.id === Number(id));

  // ドキュメントが存在しない場合
  if (!document) {
    return <p>ドキュメントが見つかりませんでした。</p>;
  }

  return (
    <div className={twStayles({style:'contant01'})}>
      <div className={twStayles({style:'contant02'})}>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{document.title}</h1>
          <h2 className="text-xl text-gray-600">言語: {document.language}</h2>
          <h2 className="text-xl text-gray-600">更新日: {document.updatedAt}</h2>
          <Link href="/document-list">
            <Button variant="secondary" className='m-2'>一覧に戻る</Button>
          </Link>
        </header>
        <section className="mb-8 gap-4">
          <Markdown remarkPlugins={[remarkGfm]} className="prose">
            {document.content}
          </Markdown>
        </section>
      </div>  
    </div>
  );
};

export default DocumentDetail;
