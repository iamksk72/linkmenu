type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-3xl border border-white/40 bg-white/30 px-5 py-4 text-center text-sm font-medium text-zinc-800 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-200 hover:bg-white/45 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}
