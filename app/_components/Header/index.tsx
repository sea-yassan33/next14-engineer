import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { tv } from 'tailwind-variants';


export default function Header(){
  const twStayles = tv({
    variants: {
      style:{
        st01:'max-w-6xl mx-auto flex justify-between items-center',
        nav01:'hidden md:flex items-center gap-8',
        nav02:'hover:text-muted-foreground transition-colors',
      },
    },
  });

  return(
    <header className="w-full px-6 py-4 bg-slate-300">
      <div className={twStayles({style:'st01'})}>
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="text-xl font-light">webエンジニア/技術集</h1>
          </Link>
        </div>
        <nav className={twStayles({style:'nav01'})}>
          <Link href="/" className={twStayles({style:'nav02'})}>
            HOME
          </Link>
          <Link href="/document-list" className={twStayles({style:'nav02'})}>
            Document_list
          </Link>
          <Link href="#" className={twStayles({style:'nav02'})}>
            News&Topics
          </Link>
          <Link href="https://github.com/sea-yassan33" className={twStayles({style:'nav02'})}>
            <FaGithub className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}