'use client'

import { useState } from 'react'
import ModernCarousel from './ModernCarousel'

export default function BoardOfDirectors() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const directors = [
    {
      id: 1,
      name: "Admiral Tanveer Ahmed",
      position: "Group Chairman",
      expertise: "Strategic Leadership",
      category: "Military Leadership"
    },
    {
      id: 2,
      name: "General Muhammad Abdul Janjua",
      position: "Board Member",
      expertise: "Defense & Security",
      category: "Military Leadership"
    },
    {
      id: 3,
      name: "General Khalid Mahmood",
      position: "Board Member",
      expertise: "Strategic Planning",
      category: "Military Leadership"
    },
    {
      id: 4,
      name: "General Muhammad Jawed",
      position: "Board Member",
      expertise: "Operations Management",
      category: "Military Leadership"
    },
    {
      id: 5,
      name: "Air Marshal Iftikhar Gul",
      position: "Board Member",
      expertise: "Aviation & Technology",
      category: "Military Leadership"
    },
    {
      id: 6,
      name: "Mian Abdul Wajid",
      position: "Group Managing Director",
      expertise: "Business Strategy",
      category: "Business Leadership"
    },
    {
      id: 7,
      name: "Nasir Mehdi Janjua",
      position: "Board Member",
      expertise: "Corporate Governance",
      category: "Business Leadership"
    },
    {
      id: 8,
      name: "Waqas Wajid",
      position: "Board Member",
      expertise: "Financial Management",
      category: "Business Leadership"
    },
    {
      id: 9,
      name: "Dr Nighat Farooq",
      position: "Board Member",
      expertise: "Healthcare & Research",
      category: "Healthcare & Academia"
    },
    {
      id: 10,
      name: "Bishop Nasir Alam",
      position: "Board Member",
      expertise: "Community Development",
      category: "Community & Faith"
    },
    {
      id: 11,
      name: "Doctor Muhammad Sajjad",
      position: "Board Member",
      expertise: "Medical Sciences",
      category: "Healthcare & Academia"
    },
    {
      id: 12,
      name: "Engineer Khadeem Hussain",
      position: "Board Member",
      expertise: "Engineering & Innovation",
      category: "Technical Leadership"
    }
  ]

  const categories = ["Business Leadership", "Healthcare & Academia", "Community & Faith", "Technical Leadership"]

  // Filter directors based on selected category
  const filteredDirectors = selectedCategory 
    ? directors.filter(director => director.category === selectedCategory)
    : directors

  const carouselItems = filteredDirectors.map((director) => ({
    id: director.id,
    content: (
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:border-2 hover:border-blue-200 transition-all duration-300 overflow-hidden group h-full flex flex-col">
        {/* Director Image Placeholder */}
        <div className="h-24 sm:h-32 md:h-40 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="text-white text-lg sm:text-2xl md:text-3xl font-bold text-center px-2 relative z-10">
            {director.name.split(' ').map(word => word[0]).join('')}
          </div>
        </div>

        <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
          <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
            {director.name}
          </h3>
          
          <p className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base mb-2">
            {director.position}
          </p>
          
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
            {director.expertise}
          </p>

          <div className="mt-auto pt-2 sm:pt-3 border-t border-gray-100">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-2 sm:px-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-xs sm:text-sm transform hover:scale-105 shadow-sm hover:shadow-md">
              View Profile
            </button>
          </div>
        </div>
      </div>
    )
  }))

  return (
    <section className="pt-24 lg:pt-28 pb-16 sm:pb-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, #10B981 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Modern Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <span className="text-green-600 text-sm font-medium tracking-wider uppercase">Governance</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-green-500"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent">
                Board of Directors
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Our distinguished board brings together expertise from military leadership, business strategy, 
              healthcare, and community development to guide our organization&apos;s strategic direction.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                selectedCategory === null
                  ? 'text-white bg-blue-600 border border-blue-600'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? 'text-white bg-blue-600 border border-blue-600'
                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Directors Carousel */}
        <div className="mb-16">
          <ModernCarousel
            items={carouselItems}
            itemsPerView={4}
            gap={20}
            showArrows={true}
            showDots={true}
            autoPlay={false}
            className="max-w-7xl mx-auto"
          />
        </div>

        {/* Board Overview */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Strategic Governance
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              Comprehensive oversight and strategic guidance across all business operations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Strategic Vision</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">Long-term planning and strategic direction</p>
            </div>
            
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Diverse Expertise</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">Multi-sector knowledge and experience</p>
            </div>
            
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Innovation Focus</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">Driving technological advancement</p>
            </div>
            
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Stakeholder Value</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">Creating sustainable value for all</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
