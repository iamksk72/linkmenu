type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-36 w-36 rounded-full bg-zinc-200 dark:bg-zinc-800" />
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
    </div>
  );
}
