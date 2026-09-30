export default function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800">
      <div className="aspect-square bg-gray-200 dark:bg-zinc-800" />
      <div className="space-y-3 p-4">
        <div className="h-3 w-1/3 rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="h-5 w-2/3 rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="h-10 w-full rounded-xl bg-gray-200 dark:bg-zinc-800" />
      </div>
    </div>
  )
}