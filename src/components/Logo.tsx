import React from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className = '', width = 60, height = 60 }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#1e3a8a', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#1e40af', stopOpacity: 1}} />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
          </linearGradient>
          <linearGradient id="bronzeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#92400e', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#78350f', stopOpacity: 1}} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle cx="60" cy="60" r="58" fill="url(#bgGradient)" stroke="#1e40af" strokeWidth="2"/>
        
        {/* Banner with modern styling */}
        <path
          d="M 20 85 L 35 85 L 40 95 L 60 95 L 80 95 L 85 85 L 100 85 L 100 90 L 85 90 L 80 100 L 60 100 L 40 100 L 35 90 L 20 90 Z"
          fill="url(#goldGradient)"
          stroke="url(#bronzeGradient)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        
        {/* Outer wheel/compass rose with modern styling */}
        <circle cx="60" cy="60" r="45" fill="none" stroke="url(#bronzeGradient)" strokeWidth="3" opacity="0.9"/>
        <circle cx="60" cy="60" r="42" fill="none" stroke="url(#bronzeGradient)" strokeWidth="1" opacity="0.7"/>
        
        {/* Spokes with gradient */}
        <line x1="60" y1="15" x2="60" y2="25" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        <line x1="60" y1="95" x2="60" y2="105" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        <line x1="15" y1="60" x2="25" y2="60" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        <line x1="95" y1="60" x2="105" y2="60" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        <line x1="25" y1="25" x2="35" y2="35" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        <line x1="85" y1="85" x2="95" y2="95" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        <line x1="25" y1="95" x2="35" y2="85" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        <line x1="85" y1="35" x2="95" y2="25" stroke="url(#bronzeGradient)" strokeWidth="2.5" opacity="0.8"/>
        
        {/* Decorative dots with glow effect */}
        <circle cx="60" cy="18" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="60" cy="102" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="18" cy="60" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="102" cy="60" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="25" cy="25" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="95" cy="95" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="25" cy="95" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        <circle cx="95" cy="25" r="2.5" fill="url(#goldGradient)" filter="url(#glow)"/>
        
        {/* Top loop/eyelet with modern styling */}
        <circle cx="60" cy="15" r="4" fill="none" stroke="url(#goldGradient)" strokeWidth="2.5" filter="url(#glow)"/>
        
        {/* Globe with modern gradient */}
        <circle cx="60" cy="60" r="25" fill="url(#goldGradient)" stroke="url(#bronzeGradient)" strokeWidth="1.5" opacity="0.95"/>
        
        {/* Latitude lines with modern opacity */}
        <ellipse cx="60" cy="60" rx="25" ry="8" fill="none" stroke="url(#bronzeGradient)" strokeWidth="1.2" opacity="0.6"/>
        <ellipse cx="60" cy="60" rx="25" ry="15" fill="none" stroke="url(#bronzeGradient)" strokeWidth="1.2" opacity="0.6"/>
        <ellipse cx="60" cy="60" rx="25" ry="22" fill="none" stroke="url(#bronzeGradient)" strokeWidth="1.2" opacity="0.6"/>
        
        {/* Longitude lines with modern opacity */}
        <line x1="35" y1="60" x2="85" y2="60" stroke="url(#bronzeGradient)" strokeWidth="1.2" opacity="0.6"/>
        <line x1="60" y1="35" x2="60" y2="85" stroke="url(#bronzeGradient)" strokeWidth="1.2" opacity="0.6"/>
        <line x1="45" y1="45" x2="75" y2="75" stroke="url(#bronzeGradient)" strokeWidth="1.2" opacity="0.6"/>
        <line x1="45" y1="75" x2="75" y2="45" stroke="url(#bronzeGradient)" strokeWidth="1.2" opacity="0.6"/>
        
        {/* Central star/compass rose with modern styling */}
        <path
          d="M 60 58 L 61.5 60 L 60 62 L 58.5 60 Z M 58 60 L 60 58.5 L 62 60 L 60 61.5 Z"
          fill="url(#bronzeGradient)"
          filter="url(#glow)"
        />
      </svg>
    </div>
  )
}
