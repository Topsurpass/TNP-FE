const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function Skeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden`}>
      <div className="p-4">
        <div className="flex flex-col gap-y-2">
          <div className="ml-2 h-3 w-40 bg-gray-100 text-sm font-medium" />
          <div className="ml-2 h-10 rounded-md bg-gray-100 text-sm font-medium" />
        </div>
      </div>
    </div>
  );
}

export default function DisplayFormSkeletons({ num = 15 }) {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {[...Array(num).keys()].map((item) => {
        return <Skeleton key={item} />;
      })}
    </div>
  );
}
