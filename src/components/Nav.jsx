'use client';
import {useState,useEffect} from 'react';

export default function Nav(){
    const [isDark,setIsDark]=useState(false);

    useEffect(()=>{
        const saved = localStorage.getItem('theme');
        if(saved === 'dark'){
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    },[]);
    
    function toggleTheme(){
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark',next);
        localStorage.setItem('theme',next ? 'dark':'light');
    }

    return(
        <header className="flex w-full items-center justify-between py-6 max-w-[1200px] mx-auto">
            <span className="text-section font-bold text-text-default">
                Nanhee
            </span>
            <nav className="flex gap-8">
                <a href="#work" className="text-caption text-text-sub">Work</a>
                <a href="#skill" className="text-caption text-text-sub">SKill</a>
                <a href="#about" className="text-caption text-text-sub">About</a>
                <a href="#contact" className="text-caption text-text-sub">Contact</a>
            </nav>
            <button
                onClick={toggleTheme}
                className='w-9 h-5 rounded-full bg-border relative'
            >
                <span
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-bg-sub transition-all ${isDark ? 'left-4' : 'left-0.5'}`}
                    />
            </button>
        </header>
    );
}