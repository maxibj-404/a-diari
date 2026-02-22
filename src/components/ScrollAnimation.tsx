import { useEffect, useRef, useState, type ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
  delay?: number
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animations = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-12',
    'slide-right': 'opacity-0 translate-x-12',
  }

  const animationsVisible = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-in': 'opacity-100',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? animationsVisible[animation] : animations[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
