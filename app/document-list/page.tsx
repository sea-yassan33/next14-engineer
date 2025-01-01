import { documents } from "@/public/data/document";
import DocumentListPage from '../_components/DocumentList';

export default function DocumentList() {
  return (
    <div className="p-5 md:p-20">
      <h1 className='mb-3'>ドキュメント・一覧</h1>
      <DocumentListPage documents={documents} num={10} id_flag={true}/>
    </div>
  );
}