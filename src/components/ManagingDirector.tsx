export default function ManagingDirector() {
  return (
    <section className="pt-24 lg:pt-28 pb-16 sm:pb-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, #8B5CF6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Modern Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <span className="text-purple-600 text-sm font-medium tracking-wider uppercase">Leadership</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leadership Messages
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Guiding Vision • Strategic Direction • Purposeful Impact
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Group Chairman's Message */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Header with Blue Background */}
              <div className="bg-blue-600 p-6 sm:p-8 relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-300 rounded-full"></div>
                  <div className="absolute top-12 right-8 w-4 h-4 sm:w-6 sm:h-6 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-8 left-12 w-3 h-3 sm:w-4 sm:h-4 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-300 rounded-full"></div>
                </div>

                {/* Chairman Image */}
                <div className="relative z-10 flex justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center">
                    <img 
                      src="/images/picture-2.jpeg" 
                      alt="Admiral Tanveer Ahmad - Group Chairman"
                      className="w-full h-full object-cover"
                    />
                    {/* Fallback text when image is not available */}
                    {/* <div className="text-white text-lg sm:text-2xl font-bold text-center px-2">
                      <div>Admiral</div>
                      <div>Tanveer</div>
                      <div>Ahmad</div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  Group Chairman&apos;s Message
                </h3>

                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold italic">
                    Admiral Tanveer Ahmad
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wide">
                    WORLD GROUP OF COMPANIES
                  </span>
                </div>

                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    As the Group Chairman of World Group of Companies, I am proud to lead an organization
                    that has established itself as a beacon of excellence across multiple sectors. Our
                    diverse portfolio encompasses healthcare through <span className="text-blue-600 font-semibold">World Pharma</span> and
                    <span className="text-blue-600 font-semibold"> Unique Pharmaceuticals</span>, sustainable mining operations via
                    <span className="text-blue-600 font-semibold"> World Stone Mining</span>, and comprehensive business services
                    through <span className="text-blue-600 font-semibold">Worldwide Business Network</span>.
                  </p>

                  <p>
                    Additionally, our commitment to social responsibility is reflected in our non-profit
                    initiative, <span className="text-blue-600 font-semibold">Community Healer</span>, which focuses on providing
                    accessible healthcare solutions to underserved communities.
                  </p>

                  <p>
                    Our success is built on the foundation of strong leadership, innovative thinking,
                    and unwavering commitment to our stakeholders. We continue to expand our horizons
                    while maintaining the highest standards of corporate governance and ethical business practices.
                  </p>
                </div>

                <div className="text-right mt-6 sm:mt-8">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    - Chairman, World Group of Companies
                  </p>
                </div>
              </div>
            </div>

            {/* Group Managing Director's Message */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Header with Purple Background */}
              <div className="bg-purple-600 p-6 sm:p-8 relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-300 rounded-full"></div>
                  <div className="absolute top-12 right-8 w-4 h-4 sm:w-6 sm:h-6 bg-purple-300 rounded-full"></div>
                  <div className="absolute bottom-8 left-12 w-3 h-3 sm:w-4 sm:h-4 bg-purple-300 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-300 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-300 rounded-full"></div>
                </div>

                {/* Managing Director Image */}
                <div className="relative z-10 flex justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center">
                    <img 
                      src="/images/picture-1.jpeg" 
                      alt="Mian Abdul Wajid - Group Managing Director"
                      className="w-full h-full object-cover"
                    />
                    {/* Fallback text when image is not available */}
                    {/* <div className="text-white text-lg sm:text-2xl font-bold text-center px-2">
                      <div>Mian</div>
                      <div>Abdul</div>
                      <div>Wajid</div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  Group Managing Director&apos;s Message
                </h3>

                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold italic">
                    Mian Abdul Wajid
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wide">
                    WORLD GROUP OF COMPANIES
                  </span>
                </div>

                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    As the Group Managing Director, I am committed to driving sustainable value creation
                    across all our divisions. Our purpose is clear: to deliver exceptional performance
                    in pharmaceuticals through <span className="text-blue-600 font-semibold">World Pharma</span> and
                    <span className="text-blue-600 font-semibold"> Unique Pharmaceuticals</span>, mineral exploration
                    via <span className="text-blue-600 font-semibold">World Stone Mining</span>, logistics and business
                    solutions through <span className="text-blue-600 font-semibold">Worldwide Business Network</span>,
                    and community development via <span className="text-blue-600 font-semibold">Community Healer</span>.
                  </p>

                  <p>
                    Our agility and strong values enable us to navigate complex market dynamics while
                    maintaining our commitment to excellence. We focus on building lasting partnerships
                    and creating value for all our stakeholders through innovative solutions and
                    sustainable practices.
                  </p>

                  <p>
                    Together with our dedicated team and strategic partners, we continue to expand
                    our global footprint while upholding the highest standards of corporate responsibility
                    and ethical business conduct.
                  </p>
                </div>

                <div className="text-right mt-6 sm:mt-8">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    - Managing Director, World Group of Companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
