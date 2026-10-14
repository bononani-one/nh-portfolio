import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function SubHeader(){
    return(
        <header className='w-full flex items-center justify-between py-6 max-w-[1200px] mx-auto'>
            <Link href="/"
            className="inline-block text-section font-bold hover:rotate-6 active:rotate-6 transition-transform"
            >
                <span className="text-point">N</span>
                <span className="text-text-default">anhee</span>
            </Link>
            <div className='flex items-center gap-8'>
                <Link href="/#work" className='text-caption text-text-sub'>
                ← All Projects</Link>
                <ThemeToggle />
            </div>
        </header>
    );
}