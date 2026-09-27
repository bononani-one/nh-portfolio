'use client';
import {useState,useEffect} from 'react';

const codeLines = [
    {indent:0,text:'export default function Chip({'},
    {indent:1,text:'children,tone,dashed'},
    {indent:0,text:'}) {'},
    {indent:1,text:'return ('},
    {indent:2,text:'<span className="rounded-full>'},
    {indent:3,text:'border-point text-point'},
    {indent:2,text:'/>'},
    {indent:1,text:');'},
    {indent:0,text:'}'},
];

export default function CodeMockup(){
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(()=>{
        if(visibleLines < codeLines.length){
            const timer = setTimeout(()=>{
                setVisibleLines((prev)=>prev+1);
            },300);
            return ()=> clearTimeout(timer);
        }
    },[visibleLines]

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
            <div className="flex-1 bg-bg-default p-6 font-mono text-caption leading-relaxed">
                {codeLines.slice(0,visibleLines).map((line,index)=>(
                    <p key={index} style={{paddingLeft:`${line.indent *1}rem`}} className='text-text-sub'>{line.text}</p>
                ))}
                {visibleLines < codeLines.length && (
                    <span className='inline-block w-2 h-4 bg-point animate-pulse' />
                )}
            </div>
        </div>
    );
}