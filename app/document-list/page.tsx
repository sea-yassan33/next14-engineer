import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { documents } from "@/public/data/document";


export default function DocumentList() {
  const twStayles = tv({
    variants: {
      style:{
        th:'border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left',
        td:'border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400',
      },
    },
  });
  return (
    <div className="p-5 md:p-20">
      <h1 className='mb-3'>ドキュメント・一覧</h1>
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className={twStayles({style:'th'})}>id</th>
            <th className={twStayles({style:'th'})}>title</th>
            <th className={twStayles({style:'th'})}>language</th>
            <th className={twStayles({style:'th'})}>update</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {documents.map((document) => (
            <tr key={document.id}>
              <td className={twStayles({style:'td'})}>{document.id}</td>
              <td className={twStayles({style:'td'})}>
                <Link href={`/document-list/${document.id}`}>
                  <p className="text-blue-500">{document.title}</p>
                </Link>
              </td>
              <td className={twStayles({style:'td'})}>{document.language}</td>
              <td className={twStayles({style:'td'})}>{document.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}