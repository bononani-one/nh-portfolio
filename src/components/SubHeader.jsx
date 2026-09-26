import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function SubHeader(){
    return(
        <header className='w-full flex items-center justify-between py-6 max-w-[1200px] mx-auto'>
            <Link href="/" className='text-section font-bold text-text-default'>
            Nanhee</Link>
            <div className='flex items-center gap-8'>
                <Link href="/#work" className='text-caption text-text-sub'>
                ← All Projects</Link>
                <ThemeToggle />
            </div>
        </header>
    );
}