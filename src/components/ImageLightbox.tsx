import { useEffect, useCallback } from 'react'
import { X, ZoomIn } from 'lucide-react'

interface ImageLightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
        <X size={24} />
      </button>
      <img src={src} alt={alt} className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

interface ClickableImageProps {
  src: string
  alt: string
  className?: string
  onOpen: (src: string, alt: string) => void
}

export function ClickableImage({ src, alt, className = '', onOpen }: ClickableImageProps) {
  return (
    <div className="relative group cursor-pointer" onClick={() => onOpen(src, alt)}>
      <img src={src} alt={alt} className={className} />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
          <ZoomIn size={24} className="text-[#1a1a2e]" />
        </div>
      </div>
    </div>
  )
}
