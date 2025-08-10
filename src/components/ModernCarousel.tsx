'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'

interface CarouselItem {
  id: number | string
  content: React.ReactNode
}

interface ModernCarouselProps {
  items: CarouselItem[]
  className?: string
  showDots?: boolean
  showArrows?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  itemsPerView?: number
  gap?: number
}

export default function ModernCarousel({
  items,
  className = '',
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  itemsPerView = 1,
  gap = 16
}: ModernCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [currentItemsPerView, setCurrentItemsPerView] = useState(itemsPerView)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setCurrentItemsPerView(1)
      } else if (window.innerWidth < 768) { // md breakpoint
        setCurrentItemsPerView(2)
      } else if (window.innerWidth < 1024) { // lg breakpoint
        setCurrentItemsPerView(3)
      } else {
        setCurrentItemsPerView(itemsPerView)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [itemsPerView])

  // Calculate max index to prevent scrolling beyond last item
  const maxIndex = Math.max(0, items.length - currentItemsPerView)
  
  const goToSlide = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(clampedIndex)
    setTranslateX(-clampedIndex * (100 / currentItemsPerView))
  }, [currentItemsPerView, maxIndex])

  const nextSlide = useCallback(() => {
    if (currentIndex >= maxIndex) return // Stop at last item
    const nextIndex = currentIndex + 1
    setCurrentIndex(nextIndex)
    setTranslateX(-nextIndex * (100 / currentItemsPerView))
  }, [currentIndex, currentItemsPerView, maxIndex])

  const prevSlide = useCallback(() => {
    if (currentIndex <= 0) return // Stop at first item
    const prevIndex = currentIndex - 1
    setCurrentIndex(prevIndex)
    setTranslateX(-prevIndex * (100 / currentItemsPerView))
  }, [currentIndex, currentItemsPerView])

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    const movePercent = (diff / (carouselRef.current?.offsetWidth || 1)) * 100
    
    // Free mode: allow scrolling beyond boundaries with resistance
    const newTranslateX = -currentIndex * (100 / currentItemsPerView) + movePercent
    
    // Add resistance at boundaries
    if (currentIndex === 0 && newTranslateX > 0) {
      setTranslateX(newTranslateX * 0.3) // Resistance at start
    } else if (currentIndex >= maxIndex && newTranslateX < -maxIndex * (100 / currentItemsPerView)) {
      const overscroll = newTranslateX + maxIndex * (100 / currentItemsPerView)
      setTranslateX(-maxIndex * (100 / currentItemsPerView) + overscroll * 0.3) // Resistance at end
    } else {
      setTranslateX(newTranslateX)
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    const currentTranslateX = translateX
    const threshold = 20 // Minimum swipe distance
    
    if (Math.abs(currentTranslateX + currentIndex * (100 / currentItemsPerView)) > threshold) {
      if (currentTranslateX > 0 && currentIndex > 0) {
        prevSlide()
      } else if (currentTranslateX < 0 && currentIndex < maxIndex) {
        nextSlide()
      } else {
        // Snap back to current position if at boundary
        setTranslateX(-currentIndex * (100 / currentItemsPerView))
      }
    } else {
      // Snap back to current position
      setTranslateX(-currentIndex * (100 / currentItemsPerView))
    }
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    const movePercent = (diff / (carouselRef.current?.offsetWidth || 1)) * 100
    
    // Free mode: allow scrolling beyond boundaries with resistance
    const newTranslateX = -currentIndex * (100 / currentItemsPerView) + movePercent
    
    // Add resistance at boundaries
    if (currentIndex === 0 && newTranslateX > 0) {
      setTranslateX(newTranslateX * 0.3) // Resistance at start
    } else if (currentIndex >= maxIndex && newTranslateX < -maxIndex * (100 / currentItemsPerView)) {
      const overscroll = newTranslateX + maxIndex * (100 / currentItemsPerView)
      setTranslateX(-maxIndex * (100 / currentItemsPerView) + overscroll * 0.3) // Resistance at end
    } else {
      setTranslateX(newTranslateX)
    }
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    const currentTranslateX = translateX
    const threshold = 20
    
    if (Math.abs(currentTranslateX + currentIndex * (100 / currentItemsPerView)) > threshold) {
      if (currentTranslateX > 0 && currentIndex > 0) {
        prevSlide()
      } else if (currentTranslateX < 0 && currentIndex < maxIndex) {
        nextSlide()
      } else {
        // Snap back to current position if at boundary
        setTranslateX(-currentIndex * (100 / currentItemsPerView))
      }
    } else {
      setTranslateX(-currentIndex * (100 / currentItemsPerView))
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && items.length > currentItemsPerView) {
      autoPlayRef.current = setInterval(() => {
        // Stop auto-play when reaching the last item
        if (currentIndex >= maxIndex) {
          if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
          }
          return
        }
        nextSlide()
      }, autoPlayInterval)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlay, autoPlayInterval, nextSlide, items.length, currentItemsPerView, currentIndex, maxIndex])

  // Pause auto-play on hover/touch
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  // Reset current index when items per view changes
  useEffect(() => {
    // With infinite scrolling, we don't need to reset the index
  }, [currentItemsPerView])

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="overflow-hidden rounded-2xl"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${translateX}%)`,
            gap: `${gap}px`
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: `${100 / currentItemsPerView}%` }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > currentItemsPerView && (
        <>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > currentItemsPerView && (
        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-6 sm:w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && items.length > currentItemsPerView && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-2xl overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  )
}
