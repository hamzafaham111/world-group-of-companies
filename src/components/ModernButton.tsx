import React from 'react'

interface ModernButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export default function ModernButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon,
  iconPosition = 'left'
}: ModernButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 shadow-lg hover:shadow-yellow-400/25 hover:from-yellow-300 hover:to-orange-300 focus:ring-yellow-400",
    secondary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-blue-500/25 hover:from-blue-400 hover:to-purple-400 focus:ring-blue-500",
    outline: "border-2 border-white/30 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/50 focus:ring-white/50",
    ghost: "text-white/90 hover:text-white hover:bg-white/10 focus:ring-white/50",
    gradient: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-slate-900 shadow-lg hover:shadow-yellow-400/25 hover:from-yellow-300 hover:via-orange-300 hover:to-red-300 focus:ring-yellow-400"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  const iconClasses = icon ? "space-x-2" : ""
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${iconClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  )
}

// Specialized button variants
export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  className = '',
  onClick,
  disabled = false
}: {
  icon: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  }
  
  return (
    <ModernButton
      variant={variant}
      size={size}
      className={`${sizeClasses[size]} p-0 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </ModernButton>
  )
}

export function FloatingActionButton({
  icon,
  onClick,
  className = ''
}: {
  icon: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-full shadow-2xl hover:shadow-yellow-400/25 hover:scale-110 transition-all duration-300 z-50 ${className}`}
    >
      {icon}
    </button>
  )
}
