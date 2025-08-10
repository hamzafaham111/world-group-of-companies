'use client'

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, FreeMode, EffectFade, EffectCube, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-coverflow'

interface CarouselItem {
  id: number | string
  content: React.ReactNode
}

interface SwiperCarouselProps {
  items: CarouselItem[]
  className?: string
  showDots?: boolean
  showArrows?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  itemsPerView?: number
  gap?: number
  freeMode?: boolean
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow'
  loop?: boolean
  centeredSlides?: boolean
  speed?: number
  pauseOnHover?: boolean
  pauseOnFocus?: boolean
}

export default function SwiperCarousel({
  items,
  className = '',
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  itemsPerView = 1,
  gap = 16,
  freeMode = true,
  effect = 'slide',
  loop = false,
  centeredSlides = false,
  speed = 600,
  pauseOnHover = true,
  pauseOnFocus = true
}: SwiperCarouselProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)

  // Enhanced autoplay with pause on hover/focus
  useEffect(() => {
    if (!swiperRef.current || !autoPlay) return

    const swiper = swiperRef.current
    if (!swiper) return

    const handleMouseEnter = () => {
      if (pauseOnHover) {
        swiper.autoplay.stop()
      }
    }

    const handleMouseLeave = () => {
      if (pauseOnHover) {
        swiper.autoplay.start()
      }
    }

    const handleFocus = () => {
      if (pauseOnFocus) {
        swiper.autoplay.stop()
      }
    }

    const handleBlur = () => {
      if (pauseOnFocus) {
        swiper.autoplay.start()
      }
    }

    const carouselElement = swiper.el
    carouselElement.addEventListener('mouseenter', handleMouseEnter)
    carouselElement.addEventListener('mouseleave', handleMouseLeave)
    carouselElement.addEventListener('focusin', handleFocus)
    carouselElement.addEventListener('focusout', handleBlur)

    return () => {
      carouselElement.removeEventListener('mouseenter', handleMouseEnter)
      carouselElement.removeEventListener('mouseleave', handleMouseLeave)
      carouselElement.removeEventListener('focusin', handleFocus)
      carouselElement.removeEventListener('focusout', handleBlur)
    }
  }, [autoPlay, pauseOnHover, pauseOnFocus])

  // Get effect-specific modules and options
  const getEffectModules = () => {
    const modules = [Pagination, Autoplay, FreeMode]
    if (effect === 'fade') modules.push(EffectFade)
    if (effect === 'cube') modules.push(EffectCube)
    if (effect === 'coverflow') modules.push(EffectCoverflow)
    return modules
  }

  const getEffectOptions = () => {
    switch (effect) {
      case 'fade':
        return {
          fadeEffect: {
            crossFade: true
          }
        }
      case 'cube':
        return {
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        }
      case 'coverflow':
        return {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }
        }
      default:
        return {}
    }
  }

  return (
    <div className={`relative ${className}`}>
      <Swiper
        ref={swiperRef}
        modules={getEffectModules()}
        spaceBetween={gap}
        slidesPerView={itemsPerView}
        pagination={showDots ? { 
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index: number, className: string) {
            return `<span class="${className} !w-3 !h-3 !bg-gray-300 hover:!bg-blue-500 !transition-all !duration-300"></span>`
          }
        } : false}
        autoplay={autoPlay ? { 
          delay: autoPlayInterval, 
          disableOnInteraction: false,
          pauseOnMouseEnter: pauseOnHover,
          waitForTransition: true
        } : false}
        freeMode={freeMode}
        grabCursor={true}
        loop={loop}
        centeredSlides={centeredSlides}
        speed={speed}
        effect={effect}
        {...getEffectOptions()}
        className="swiper-carousel"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: effect === 'fade' ? false : centeredSlides
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: effect === 'fade' ? false : centeredSlides
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: effect === 'fade' ? false : centeredSlides
          },
          1024: {
            slidesPerView: itemsPerView,
            spaceBetween: gap,
            centeredSlides: effect === 'fade' ? false : centeredSlides
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={() => {
          // Optional: Add custom slide change logic here
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            {item.content}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enhanced Custom Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-button-prev !w-10 !h-10 sm:!w-12 sm:!h-12 !bg-white/95 !backdrop-blur-md !rounded-full !shadow-xl hover:!bg-white hover:!shadow-2xl transition-all duration-300 !text-gray-700 hover:!text-gray-900 !border !border-gray-200 hover:!border-blue-300 group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-button-next !w-10 !h-10 sm:!w-12 sm:!h-12 !bg-white/95 !backdrop-blur-md !rounded-full !shadow-xl hover:!bg-white hover:!shadow-2xl transition-all duration-300 !text-gray-700 hover:!text-gray-900 !border !border-gray-200 hover:!border-blue-300 group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Enhanced Custom Pagination Dots */}
      {showDots && (
        <div className="swiper-pagination !bottom-0 !static !mt-6 !flex !justify-center !space-x-2" />
      )}

      {/* Progress Bar for Autoplay */}
      {autoPlay && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-2xl overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 transition-all duration-100 ease-linear"
            style={{
              width: '100%',
              animation: `progress ${autoPlayInterval}ms linear infinite`
            }}
          />
        </div>
      )}

      {/* Custom CSS for progress bar animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
