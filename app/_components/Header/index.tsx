import Link from 'next/link';
import { FaGithub } from "react-icons/fa";



export default function Header(){
  return(
    <header className="w-full px-6 py-4 bg-purple-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl font-light"> webエンジニア・技術集</h1>
          <p className="text-sm text-muted-foreground">Web Engineer/Technical Collection</p>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-muted-foreground transition-colors">
            HOME
          </Link>
          <Link href="#" className="hover:text-muted-foreground transition-colors">
            Document_list
          </Link>
          <Link href="#" className="hover:text-muted-foreground transition-colors">
            News&Topics
          </Link>
          <Link href="https://instagram.com" className="hover:text-muted-foreground transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}