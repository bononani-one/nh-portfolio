export default function ResultMiniCard({ title, env, point }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      <div className="w-full sm:w-[180px] aspect-square bg-gray-100 rounded-lg shrink-0" />
      <div className="flex flex-col gap-1">
        <h3 className="text-section font-bold text-text-default">{title}</h3>
        <p className="text-body text-text-sub">환경: {env}</p>
        <p className="text-body text-text-sub">디자인 포인트: {point}</p>
      </div>
    </div>
  );
}