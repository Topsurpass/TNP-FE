import { Skeleton } from ".";

export default function DisplayRoleFormSkeletons({ num = 6, rows = 20 }) {
  return (
    <div className="grid gap-5">
      {Array.from({ length: num }, (_, index) => (
        <section className="flex" key={index}>
          <div className="w-[15%]">
            <Skeleton className="h-7 w-32" />
          </div>
          <div className="grid flex-1 grid-cols-10 gap-4">
            {Array.from({ length: rows }).map((__, colIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={colIndex} className="flex items-center">
                <Skeleton className="size-10" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function DisplayRoleSkeletons({ num = 10 }) {
  return (
    <div className="grid gap-5">
      {Array.from({ length: num }, (_, index) => (
        <section className="flex flex-col gap-2" key={index}>
          <Skeleton className="h-7 w-full" />
          <Skeleton className="h-7 w-32" />
        </section>
      ))}
    </div>
  );
}
