export function AmountCardSkeleton() {
  return (
    <div className="h-24 w-full bg-neutral-100 border border-gray-100 rounded-md shadow-md flex flex-col justify-center items-center animate-pulse">
      <div className="h-5 w-20 mb-2  bg-gray-200" />
      <div className="h-5 w-20  bg-gray-200" />
    </div>
  );
}

export function AmountCardsSkeleton() {
  return (
    <>
      <AmountCardSkeleton />
      <AmountCardSkeleton />
      <AmountCardSkeleton />
    </>
  );
}

export function BarChartSkeleton() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-neutral-100 border border-gray-100 rounded-md shadow-md p-2 md:p-4 animate-pulse">
        <div className="h-5 w-36 mb-2  bg-gray-200" />
        <div className="h-5 w-36 mb-2  bg-gray-200" />

        <div className="h-80 w-60 bg-gray-200" />
      </div>
    </>
  );
}

export function PieChartSkeleton() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-neutral-100 border border-gray-100 rounded-md shadow-md p-4 my-4 w-full animate-pulse">
        <div className="h-5 w-36 mb-2  bg-gray-200" />
        <div className="flex items-center gap-2 py-8 w-[350] h-[350]">
          <div className="h-40 w-40 bg-gray-200 rounded-full" />
          <div className="flex flex-col gap-2">
            <div className="h-5 w-36 mb-2  bg-gray-200" />
            <div className="h-5 w-36 mb-2  bg-gray-200" />
            <div className="h-5 w-36 mb-2  bg-gray-200" />
            <div className="h-5 w-36 mb-2  bg-gray-200" />
            <div className="h-5 w-36 mb-2  bg-gray-200" />
            <div className="h-5 w-36 mb-2  bg-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
}

export function ListSkeleton() {
  return (
    <>
      <div className="grid grid-cols-3 text-center uppercase py-4 border-b border-b-gray-300 md:grid-cols-4">
        <div className="ml-2 h-5 w-36 mb-2  bg-gray-200" />
        <div className="h-5 w-36 mb-2  bg-gray-200" />
        <div className="h-5 w-36 mb-2  bg-gray-200" />
        <div className="h-5 w-36 mb-2  bg-gray-200" />
      </div>
      <div className="list">
        <div className="grid grid-cols-3 text-center py-4 md:grid-cols-4">
          <div className="ml-2 h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 text-center py-4 md:grid-cols-4">
          <div className="ml-2 h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 text-center py-4 md:grid-cols-4">
          <div className="ml-2 h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 text-center py-4 md:grid-cols-4">
          <div className="ml-2 h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 text-center py-4 md:grid-cols-4">
          <div className="ml-2 h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
          <div className="h-5 w-36 mb-2  bg-gray-200" />
        </div>
      </div>
    </>
  );
}
