export default function Badge({children,variant = 'default'}){
    if(variant === 'progress') {
        return(
            <span className="inline-block text-label px-2.5 py-1 rounded-full border border-dashed border-border-strong text-text-sub">
                {children}
            </span>
        );
    }
    return(
        <span className="inline-block text-label px-2.5 py-1 rounded-full border border-point text-point">
            {children}
        </span>
    );
}