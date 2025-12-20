/* eslint-disable @typescript-eslint/no-explicit-any */
;


export default function PageHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8 text-(--hero-foreground)">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-slate-800 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold ">{title}</h1>
      </div>
      <p className="ml-12 text-muted-foreground">{subtitle}</p>
    </div>
  );
}