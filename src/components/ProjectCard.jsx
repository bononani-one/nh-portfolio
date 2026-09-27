import Link from 'next/link';
import Image from 'next/image';
import Chip from '@/components/Chip';

export default function ProjectCard({ href, image, badge, title, summary,onAirNote }) {
  return (
    <Link
      href={href}
      className="bg-bg-sub border border-border rounded-xl p-5 flex flex-col gap-3 transition-shadow hover:shadow-lg active:scale-[0.98]"
    >
      <div className="relative aspect-video bg-bg-default rounded-lg overflow-hidden">
        {image && (
          <Image src={image} alt={title} fill className="object-cover p-2" />
        )}
        {onAirNote && (
            <div className='absolute inset-0 flex items-center justify-center p-8'>
                <div className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-point animate-pulse shrink-0' />
                    <span className='text-caption text-text-default'>{onAirNote}</span>
                </div>
            
            </div>    
        )}
        {image && <div className='absolute inset-0 bg-bg-default/30' />}
      </div>
      <Chip tone="accent" className="self-start">
        {badge}
      </Chip>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-section font-bold text-text-default">{title}</h3>
        <span className="text-point shrink-0">→</span>
      </div>
      <p className="text-body text-text-sub">{summary}</p>
    </Link>
  );
}