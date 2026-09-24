import Chip from '@/components/Chip';
import Image from 'next/image';

export default function ProjectCard({image,badge,title,summary}){
    return (
        <div className='bg-bg-sub border border-border rounded-xl p-5 flex flex-col gap-3'>
            <div className='relative aspect-video bg-bg-default rounded-lg overflow-hidden'>
                {image && (
                    <Image src={image} alt={title} fill className='object-cover' />
                )}
            </div>
            <Chip tone='accent'>{badge}</Chip>
            <h3 className='text-section font-bold text-text-default'>{title}</h3>
            <p className='text-body text-text-sub'>{summary}</p>
        </div>
    );
}