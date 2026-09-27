export default function CodeMockup(){
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
                <p className="text-text-sub">
                <span className="text-point">export default function</span> Chip({'{'}
                </p>
                <p className="text-text-sub pl-4">children, tone, dashed</p>
                <p className="text-text-sub">{'}) {'}</p>
                <p className="text-text-sub pl-4">
                <span className="text-point">return</span> (
                </p>
                <p className="text-text-sub pl-8">
                &lt;span className=<span className="text-text-default">"rounded-full</span>
                </p>
                <p className="text-text-sub pl-12">
                <span className="text-text-default">border-point text-point"</span>
                </p>
                <p className="text-text-sub pl-8">/&gt;</p>
                <p className="text-text-sub pl-4">);</p>
                <p className="text-text-sub">{'}'}</p>
            </div>
        </div>
    );
}