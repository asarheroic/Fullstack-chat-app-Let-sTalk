import React from 'react'

const SIdeBarSkeleton = () => {
  return (
    <div>
      <div>
        <div className="border-b border-base-300 w-full p-5">
    <div className="flex items-center gap-2">
    <div className="bg-base-200 rounded-full size-6 animate-pulse" />
    <div className="w-20 h-4 bg-base-200 rounded hidden lg:block animate-pulse" />
   </div>

   <div className="mt-3 hidden lg:flex items-center gap-2">
    <div className="w-4 h-4 bg-base-200 rounded animate-pulse" />
    <div className="w-24 h-3 bg-base-200 rounded animate-pulse" />
     </div>
  </div>

<div className="overflow-y-auto w-full py-3 space-y-2">
  {[...Array(5)].map((_, i) => (
    <div key={i} className="flex items-center gap-2 p-2 animate-pulse">
      <div className="size-12 bg-base-200 rounded-full" />
      <div className="hidden lg:block min-w-0 space-y-1">
        <div className="w-24 h-4 bg-base-200 rounded" />
        <div className="w-32 h-3 bg-base-200 rounded" />
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  )
}

export default SIdeBarSkeleton
