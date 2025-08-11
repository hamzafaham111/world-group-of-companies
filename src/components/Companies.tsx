import SwiperCarousel from './SwiperCarousel'

export default function Companies() {
  const companies = [
    {
      id: 1,
      name: "World Pharma",
      description: "Leading pharmaceutical solutions and innovative drug development for global healthcare needs",
      sector: "Pharmaceuticals",
      color: "from-blue-500 to-blue-600",
      logo: "/images/world-pharma-logo.png"
    },
    {
      id: 2,
      name: "Unique Pharmaceuticals",
      description: "Specialized pharmaceutical manufacturing with focus on rare diseases and personalized medicine",
      sector: "Pharmaceuticals",
      color: "from-purple-500 to-purple-600",
      logo: "/images/unique-pharmaceutical-logo.png"
    },
    {
      id: 3,
      name: "Community Healer",
      description: "Non-profit initiative focused on providing accessible healthcare solutions to underserved communities",
      sector: "Healthcare",
      color: "from-green-500 to-green-600",
      logo: "/images/Group 8.png"
    },
    {
      id: 4,
      name: "World Stone Mining",
      description: "Sustainable mining operations with advanced extraction technologies and environmental responsibility",
      sector: "Mining",
      color: "from-gray-500 to-gray-600",
      logo: "/images/world-stone-mining-logo-1.png"
    },
    {
      id: 5,
      name: "Worldwide Business Network",
      description: "Global business consulting and strategic partnership facilitation across multiple industries",
      sector: "Consulting",
      color: "from-orange-500 to-orange-600",
      logo: "/images/worldeide-business-network.png"
    }
  ]

  const carouselItems = companies.map((company) => ({
    id: company.id,
    content: (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:border-2 hover:border-blue-200 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Company Logo */}
        <div className={`h-24 sm:h-32 md:h-40 bg-gradient-to-br ${company.color} flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>
          <img 
            src={company.logo} 
            alt={`${company.name} Logo`}
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </div>

        <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
          <div className="mb-2 sm:mb-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
              {company.sector}
            </span>
          </div>
          
          <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            {company.name}
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4 flex-grow">
            {company.description}
          </p>

          <div className="mt-auto pt-2 sm:pt-3 border-t border-gray-100">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base transform hover:scale-105 shadow-md hover:shadow-lg">
              Learn More
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
          backgroundImage: `radial-gradient(circle at 75% 25%, #3B82F6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Modern Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-blue-600 text-sm font-medium tracking-wider uppercase">Portfolio</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Our Companies
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              World Group of Companies operates across multiple sectors, delivering excellence and innovation 
              in healthcare, pharmaceuticals, mining, and business consulting.
            </p>
          </div>
        </div>

        {/* Companies Carousel */}
        <div className="mb-16">
          <SwiperCarousel
            items={carouselItems}
            itemsPerView={4}
            gap={20}
            showArrows={true}
            showDots={true}
            autoPlay={false}
            freeMode={true}
            className="max-w-7xl mx-auto"
          />
        </div>

        {/* Sector Overview */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-blue-600 text-sm font-medium tracking-wider uppercase">Sectors</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Our Core Sectors
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              Specialized expertise across key industries driving innovation and growth
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Healthcare & Pharma</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">Innovative solutions for global health challenges</p>
            </div>
            
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Mining & Resources</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">Sustainable extraction with environmental responsibility</p>
            </div>
            
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">Business Consulting</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">Strategic partnerships and global business solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
