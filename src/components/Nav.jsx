import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Nav(){

    return(
        <header className="flex w-full items-center justify-between py-6 max-w-[1200px] mx-auto">
            <Link href="/"
            className="inline-block text-section font-bold hover:rotate-6 active:rotate-6 transition-transform"
            >
                <span className="text-point">N</span>
                <span className="text-text-default">anhee</span>
            </Link>
            <div className="flex items-center gap-8">
                <nav className="flex gap-8">
                    <a href="#work" className="text-caption text-text-sub hover:text-text-default hover:underline underline-offset-4">
                        Work
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-point transition-all group-hover:w-full" />
                    </a>
                    <a href="#skill" className="text-caption text-text-sub hover:text-text-default hover:underline underline-offset-4">
                        SKill
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-point transition-all group-hover:w-full" />
                    </a>
                    <a href="#about" className="text-caption text-text-sub hover:text-text-default hover:underline underline-offset-4">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-point transition-all group-hover:w-full" />    
                    </a>
                    <a href="#contact" className="text-caption text-text-sub hover:text-text-default hover:underline underline-offset-4">
                        Contact
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-point transition-all group-hover:w-full" />
                    </a>
                </nav>
                <ThemeToggle />
            </div>
           
        </header>
    );
}