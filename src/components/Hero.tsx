'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import ModernButton from './ModernButton'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

      {/* Navigation with glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-900/85 via-blue-900/85 to-indigo-900/85 border-white/20 shadow-lg' 
          : 'bg-gradient-to-r from-slate-900/70 via-blue-900/70 to-indigo-900/70 border-white/10'
      } ${
        isScrolled 
          ? 'md:bg-gradient-to-r md:from-slate-900/95 md:via-blue-900/95 md:to-indigo-900/95' 
          : 'md:bg-gradient-to-r md:from-slate-900/80 md:via-blue-900/80 md:to-indigo-900/80'
      }`}>
        <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Logo width={50} height={50} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-md"></div>
            </div>
            <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              <span className="text-yellow-400">World</span> Group
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Companies', 'Leadership', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative group text-white/90 hover:text-white transition-all duration-300 text-sm lg:text-base font-medium cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    const offset = 80; // Account for fixed navbar
                    const elementPosition = element.offsetTop - offset;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-white/3 backdrop-blur-md border border-white/8 hover:bg-white/12 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation with glassmorphism */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in-up">
            <div className="bg-white/3 backdrop-blur-md rounded-2xl p-6 border border-white/8 shadow-2xl">
              {['Home', 'Companies', 'Leadership', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block hover:text-yellow-400 transition-colors duration-300 text-lg py-3 border-b border-white/10 last:border-b-0 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      const offset = 80; // Account for fixed navbar
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 lg:pt-40 pb-12 lg:pb-20 text-center flex-1 flex flex-col justify-center">
        {/* Logo with enhanced styling */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <Logo width={140} height={140} />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          </div>
        </div>
        
        {/* Main heading with modern typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            World
          </span>
          <span className="text-white"> Group of Companies</span>
        </h1>
        
        {/* Subtitle with enhanced styling */}
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed px-4 text-white/90 font-light">
          Leading the way across{' '}
          <span className="text-yellow-400 font-medium">healthcare</span>,{' '}
          <span className="text-yellow-400 font-medium">pharmaceuticals</span>, and{' '}
          <span className="text-yellow-400 font-medium">mining</span> sectors with innovation, 
          sustainability, and global excellence
        </p>
        
        {/* CTA Buttons with modern design */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
          <ModernButton variant="primary" size="lg">
            Explore Our Companies
          </ModernButton>
          
          <ModernButton variant="outline" size="lg">
            Learn More
          </ModernButton>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
