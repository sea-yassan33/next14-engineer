import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { FcDocument } from "react-icons/fc";
import { FaRegNewspaper } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function Home() {

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
                <Link href='#'>
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
      <section className="flex-1 overflow-y-auto">
        <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6">
          <Card className="col-span-2 md:col-span-3 lg:col-span-4">
            <CardHeader>
              <CardTitle>New Docment -top3-</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>language</TableHead>
                    <TableHead>Create Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Redesign homepage</TableCell>
                    <TableCell>
                      <Badge variant="secondary">In Progress</Badge>
                    </TableCell>
                    <TableCell>
                      <time dateTime="2023-04-30">April 30, 2023</time>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Implement new analytics dashboard</TableCell>
                    <TableCell>
                      <Badge variant="secondary">In Progress</Badge>
                    </TableCell>
                    <TableCell>
                      <time dateTime="2023-05-15">May 15, 2023</time>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
