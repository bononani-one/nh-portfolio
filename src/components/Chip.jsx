export default function Chip({children,tone='accent',dashed=false}){
    const toneClasses=
        tone === 'accent'
        ? 'border-point text-point'
        : 'border-border-strong text-text-sub';
        
    return(
        <span
            className={`self-start inline-block text-label px-2.5 py-1 rounded-full border ${
            dashed?'border-dashed':''
             } ${toneClasses}`}
        >{children}
        </span>
    );

}