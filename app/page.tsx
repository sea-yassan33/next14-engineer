import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { FcDocument } from "react-icons/fc";
import { FaRegNewspaper } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";
import DocumentList from "./_components/DocumentList";
import { documents } from "@/public/data/document";

export default function Home() {
  // updatedAtで新しい順に並び替え
  const docmentData = documents.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
　
  return (
    <main className="min-h-screen">
      <section className="relative h-[400px]">
        <Image src="/img/img01.jpg" alt="Training track" fill className="object-cover brightness-75" priority/>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              LET&apos;S<br />PROGRAM
            </h1>
            <p className="text-white text-xl mb-8">Webエンジニア技術集</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-blue-600 text-3xl font-bold mb-12">メニュー</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <FcDocument className="w-12 h-12"/>
                </div>
                <Link href={'/document-list'}>
                  <Button className="bg-blue-600 hover:bg-blue-700">Document List</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <FaRegNewspaper className="w-12 h-12"/>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href='#'>Topic・News</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <AiFillQuestionCircle className="w-12 h-12"/>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">問合せ</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <h2 className="text-gray-600 text-3xl font-bold m-2 font-sans">New Document -Top3-</h2>
      <DocumentList documents={docmentData} num={3} id_flag={false}/>
    </main>
  );
}
