type LinkCardProps = {
  label: string;
  href: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ label, href, count, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-3xl border border-white/40 bg-white/30 px-5 py-4 text-sm font-medium text-zinc-800 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-200 hover:bg-white/45 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
        {count}회
      </span>
    </a>
  );
}
