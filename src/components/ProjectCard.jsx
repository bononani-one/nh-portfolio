import Link from 'next/link';
import Image from 'next/image';
import Chip from '@/components/Chip';

export default function ProjectCard({ href, image, badge, title, summary }) {
  return (
    <Link
      href={href}
      className="bg-bg-sub border border-border rounded-xl p-5 flex flex-col gap-3 transition-shadow hover:shadow-lg active:scale-[0.98]"
    >
      <div className="relative aspect-video bg-bg-default rounded-lg overflow-hidden">
        {image && (
          <Image src={image} alt={title} fill className="object-cover" />
        )}
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