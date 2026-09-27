import Image from 'next/image';

export default function ResultMiniCard({image,image2, title, env, point }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      <div className='flex gap-4 shrink-0 w-full sm:w-auto'>
        <div className="relative overflow-hidden flex-1 sm:flex-none sm:w-[180px] aspect-square rounded-lg bg-bg-sub">
          {image && (<Image src={image} alt={title} fill className='object-contain p-3' />)}
        </div>
        <div className="relative overflow-hidden flex-1 sm:flex-none sm:w-[180px] aspect-square rounded-lg bg-bg-sub">
          {image2 && (<Image src={image2} alt={title} fill className='object-contain p-3' />)}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-section font-bold text-text-default">{title}</h3>
        <p className="text-body text-text-sub">환경: {env}</p>
        <p className="text-body text-text-sub">디자인 포인트: {point}</p>
      </div>
    </div>
  );
}