import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // This UI will be shown as a fallback while the page content loads
  return (
    <div className="space-y-8 p-4 md:p-6">
      <div className="flex flex-col items-center text-center space-y-4 py-8">
        <Skeleton className="h-12 w-3/4 md:w-1/2" />
        <Skeleton className="h-8 w-1/2 md:w-1/3" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4 p-4 rounded-lg border bg-card">
            <Skeleton className="h-52 w-full rounded-lg" />
            <Skeleton className="h-8 w-5/6" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
