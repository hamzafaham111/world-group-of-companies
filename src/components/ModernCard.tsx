import React from 'react'

interface ModernCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'gradient'
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function ModernCard({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  padding = 'md'
}: ModernCardProps) {
  const baseClasses = "rounded-2xl border transition-all duration-300"
  
  const variantClasses = {
    default: "bg-white/10 backdrop-blur-md border-white/20 shadow-lg",
    glass: "bg-white/5 backdrop-blur-lg border-white/10 shadow-2xl",
    gradient: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-xl"
  }
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }
  
  const hoverClasses = hover ? "hover:scale-105 hover:-translate-y-1 hover:shadow-2xl" : ""
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

// Specialized card variants
export function InfoCard({ 
  title, 
  description, 
  icon, 
  className = '' 
}: {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}) {
  return (
    <ModernCard variant="glass" className={`text-center ${className}`}>
      {icon && (
        <div className="w-16 h-16 mx-auto mb-4 p-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </ModernCard>
  )
}

export function StatsCard({ 
  number, 
  label, 
  trend, 
  className = '' 
}: {
  number: string
  label: string
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}) {
  const trendColors = {
    up: "text-green-400",
    down: "text-red-400",
    neutral: "text-blue-400"
  }
  
  const trendIcons = {
    up: "↗",
    down: "↘",
    neutral: "→"
  }
  
  return (
    <ModernCard variant="gradient" className={`text-center ${className}`}>
      <div className="text-4xl font-black text-white mb-2">{number}</div>
      <div className="text-white/70 mb-2">{label}</div>
      {trend && (
        <div className={`flex items-center justify-center space-x-1 ${trendColors[trend]}`}>
          <span className="text-lg">{trendIcons[trend]}</span>
          <span className="text-sm font-medium">
            {trend === 'up' ? 'Growing' : trend === 'down' ? 'Declining' : 'Stable'}
          </span>
        </div>
      )}
    </ModernCard>
  )
}
