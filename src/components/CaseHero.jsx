import Image from 'next/image';
import Chip from '@/components/Chip';

export default function CaseHero({image,badge,title,summary,liveUrl,onAirNote}){
    return(
        <div className='max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row lg:items-center gap-10 py-10'>
            <div className="flex flex-col gap-4 lg:w-[620px] shrink-0">
                <Chip tone='accent'>{badge}</Chip>
                <h1 className="text-head font-bold text-text-default">{title}</h1>
                <p className="text-body text-text-sub">{summary}</p>
            </div>
            <div className="relative flex-1 bg-bg-sub rounded-xl overflow-hidden min-h-[280px]">
                {image && (
                    <Image src={image} alt={title} fill className='object-contain' />
                )}
                {onAirNote && (
                    <div className='absolute inset-0 flex items-center justify-center p-8'>
                        <div className='flex items-center gap-3'>
                            <span className='w-2.5 h-2.5 rounded-full bg-point animate-pulse shrink-0' />
                            <span className='text-body text-text-default'>{onAirNote}</span>
                        </div>
                    
                    </div>    
                )}
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel='noopener noreferrer'
                        className='absolute inset-0 flex items-center justify-center bg-bg-default/60'
                    >
                        <span className="text-section font-bold text-text-default">
                            실제 서비스 보러가기 →
                        </span>
                    </a>
                )}
            </div>
        </div>
    );
}
