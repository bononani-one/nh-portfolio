'use client';
import {useState,useEffect} from 'react';

const fullCode = `export default function Chip({
  children, tone, dashed
}) {
  return (
    <span className="rounded-full
      border-point text-point"
    />
  );
}`;

export default function CodeMockup(){
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(()=>{
        if(visibleCount < fullCode.length){
            const timer = setTimeout(()=>{
                setVisibleCount((prev)=>prev+1);
            },30);
            return ()=> clearTimeout(timer);
        }
    },[visibleCount]

    );

    return(
        <div className="w-full h-full flex flex-col overflow-hidden">
            {/*타이틀바*/}
            <div className="flex items-center gap-2 bg-bg-sub px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-300" />
                <span className="w-3 h-3 rounded-full bg-yellow-300" />
                <span className="w-3 h-3 rounded-full bg-green-300" />
                <span className="text-caption text-text-sub ml-2">Chip.jsx</span>
            </div>
             {/* 코드 내용 */}
            <div className="flex-1 bg-bg-default p-6 font-mono text-body leading-relaxed whitespace-pre-wrap text-text-sub">
                {fullCode.slice(0,visibleCount)}
                {visibleCount < fullCode.length && (
                    <span className="inline-block w-[2px] h-4 bg-point animate-pulse align-middle" />
                )}
            </div>
        </div>
    );
}