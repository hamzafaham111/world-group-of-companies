export default function ContactOffices() {
  const offices = [
    {
      id: 1,
      name: "Head Office",
      address: "Swat Road, Wajidabad, Chakdara Pullchowki, Malakand, KPK"
    },
    {
      id: 2,
      name: "Karachi Office",
      address: "B25 Naval Housing Scheme, Zamzama, Clifton, Karachi"
    },
    {
      id: 3,
      name: "Rawalpindi Office",
      address: "63B Chaklala Scheme 3, Street No. 07, Rawalpindi"
    },
    {
      id: 4,
      name: "Lahore Office",
      address: "House No. 15, General Colony, Sarwar Road, Lahore Cantt"
    },
    {
      id: 5,
      name: "Multan Office",
      address: "Shershah Road, Multan Cantt"
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Modern Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Get In Touch</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Connect With
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Network
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Reach out to any of our offices across Pakistan or connect with our global business network for partnerships and opportunities.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">
          {/* Left Column - Company Info & Contact */}
          <div className="space-y-12">
            {/* Company Overview */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  World Group of Companies
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Leading global business network connecting enterprises worldwide with innovative solutions across multiple sectors.
              </p>
              
              {/* Companies List */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Our Companies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['World Pharma', 'Unique Pharmaceuticals', 'Community Healer', 'World Stone Mining'].map((company, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Contact Us
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 text-sm">worldwidebusinessnetwork.pk@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300 text-sm">+92 333 949 9996</p>
                    <p className="text-gray-300 text-sm">+92 336 530 7330</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Office Locations */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Office Locations
              </h3>
              <p className="text-gray-400">Strategic presence across Pakistan's major cities</p>
            </div>
            
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                        {office.name}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-800 mt-16 pt-8">
          <p className="text-gray-400 text-sm">
            © 2025 World Group of Companies. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
