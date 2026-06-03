const SkeletonCard = () => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 flex flex-col gap-3">
      <div className="w-full h-60 bg-neutral-700 rounded-lg animate-pulse"></div>
      <div className="h-4 bg-neutral-700 rounded animate-pulse"></div>
      <div className="h-3 bg-neutral-700 rounded animate-pulse w-3/5"></div>
      <div className="flex justify-between items-center">
        <div className="h-6 w-20 bg-neutral-700 rounded-full animate-pulse"></div>
        <div className="h-3 w-10 bg-neutral-700 rounded animate-pulse"></div>
      </div>
      <div className="h-9 bg-neutral-700 rounded-xl animate-pulse"></div>
    </div>
  )
}

export default SkeletonCard