import Chip from '@/components/Chip';

export default function CaseHero({badge,title,summary}){
    return(
        <div className='max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row lg:items-center gap-10 py-10'>
            <div className="flex flex-col gap-4 lg:w-[620px] shrink-0">
                <Chip tone='accent'>{badge}</Chip>
                <h1 className="text-head font-bold text-text-default">{title}</h1>
                <p className="text-body text-text-sub">{summary}</p>
            </div>
            <div className="relative flex-1 w-full bg-gray-200 rounded-xl overflow-hidden min-h-[280px]" />
        </div>
    );
}
