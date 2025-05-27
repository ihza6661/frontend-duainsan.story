import React from 'react'

const ExploreTheNewestTrend = () => {
  return (
    <div className="text-center py-12 space-y-8">
  <p className="p-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wider">
    From elegant dresses 🤍 to <br /> chic skirts 🤍 and cozy <br />
    jumpers!
  </p>
  <button className="relative py-1 text-sm text-black border-b border-gray-700 transition group">
    VIEW ALL COLLECTIONS
    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
  </button>
</div>
  )
}

export default ExploreTheNewestTrend