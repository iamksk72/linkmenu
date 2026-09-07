import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "❤️ GitHub", href: "https://github.com/iamksk72" },
  { label: "❤️ Blog", href: "https://blog.naver.com/iamksk" },
  { label: "❤️ email", href: "mailto:iamksk@naver.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100 px-6 py-16 dark:from-zinc-950 dark:via-zinc-900 dark:to-neutral-900">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name="김상균(KSK)"
          bio="하늘을 좋아하는 AI 친구"
          imageUrl="/sunset.jpeg"
        />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
