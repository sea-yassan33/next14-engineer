import Link from 'next/link';
import { tv } from 'tailwind-variants';

export default function Footer(){
  const twStayles = tv({
    variants: {
      style:{
        st01:'flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-purple-200',
      },
    },
  });
  return(
    <footer className={twStayles({style:'st01'})}>
      <p className="text-xs text-muted-foreground">&copy; 2025 Create App. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          リンク１
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          リンク２
        </Link>
      </nav>
    </footer>
  )
}