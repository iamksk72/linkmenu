type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white via-white/70 to-orange-100/80 p-1.5 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.3)] dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-900">
        <img
          src={imageUrl}
          alt={name}
          className="h-32 w-32 rounded-full object-cover shadow-inner"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
