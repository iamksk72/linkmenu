import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100 px-6 py-16 dark:from-zinc-950 dark:via-zinc-900 dark:to-neutral-900">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name="김상균(KSK)"
          bio="하늘을 좋아하는 AI 친구"
          imageUrl="/sunset.jpeg"
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
