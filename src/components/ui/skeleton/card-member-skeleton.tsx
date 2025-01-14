const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function Skeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-secondary p-2 shadow-sm`}
    >
      <div className="flex items-center space-x-2">
        <div className="h-20 w-20 rounded-full bg-background" />
        <div className="flex flex-col space-y-3">
          <div className="h-3 w-20 rounded-md bg-background text-sm font-medium" />
          <div className="h-3 w-40 rounded-md bg-background text-sm font-medium" />
        </div>
      </div>

      {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
    </div>
  );
}

export default function CardMemberSkeleton({ num = 4 }) {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 p-4">
      {[...Array(num).keys()].map((item) => {
        return <Skeleton key={item} />;
      })}
    </div>
  );
}
