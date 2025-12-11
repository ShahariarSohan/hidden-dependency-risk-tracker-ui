export default function ProgressBar({
  value,
  maxValue = 100,
  colorClass,
}: {
  value: number;
  maxValue?: number;
  colorClass: string;
  }) {
  const pct = Math.min((value / maxValue) * 100, 100);
  return (
   <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
      <div
        className={`h-full ${colorClass} transition-all duration-700`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}