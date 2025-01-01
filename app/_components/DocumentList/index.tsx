import Link from 'next/link';
import { Card, CardContent} from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import {DocumentListProps} from "@/lib/interfaceUtils"

export default function DocumentList({ documents, num, id_flag }: DocumentListProps) {
  return(
    <section className="flex-1 overflow-y-auto">
      <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-2">
        <Card className="col-span-2 md:col-span-3 lg:col-span-4">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {id_flag === true && <TableHead>ID</TableHead>}
                  <TableHead>Title</TableHead>
                  <TableHead>language</TableHead>
                  <TableHead>Create Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.slice(0, num).map((document) => (
                  <TableRow key={document.id}>
                    {id_flag === true &&<TableCell>{document.id}</TableCell>}
                    <TableCell>
                      <Link href={`/document-list/${document.id}`}>
                        <p className="text-blue-500">{document.title}</p>
                      </Link>
                    </TableCell>
                    <TableCell>{document.language}</TableCell>
                    <TableCell>{document.updatedAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}