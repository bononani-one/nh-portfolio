export default function AboutBlock({label,children}){
    return(
        <div className="flex flex-col gap-4">
            <div>
                <span className="text-label text-text-sub">{label}</span>
                <div className="border-t border-border mt-2" />
            </div>
            {children}
        </div>
    );
}