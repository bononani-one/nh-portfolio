import ThemeToggle from "./ThemeToggle";

export default function Nav(){

    return(
        <header className="flex w-full items-center justify-between py-6 max-w-[1200px] mx-auto">
            <span className="text-section font-bold text-text-default">
                Nanhee
            </span>
            <div className="flex items-center gap-8">
                <nav className="flex gap-8">
                    <a href="#work" className="text-caption text-text-sub">Work</a>
                    <a href="#skill" className="text-caption text-text-sub">SKill</a>
                    <a href="#about" className="text-caption text-text-sub">About</a>
                    <a href="#contact" className="text-caption text-text-sub">Contact</a>
                </nav>
                <ThemeToggle />
            </div>
           
        </header>
    );
}