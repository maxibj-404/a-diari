import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { ImageLightbox } from './ImageLightbox'

interface LightboxContextType {
  openLightbox: (src: string, alt: string) => void
}

const LightboxContext = createContext<LightboxContextType>({
  openLightbox: () => {},
})

export function useLightbox() {
  return useContext(LightboxContext)
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt })
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <ImageLightbox src={lightbox?.src || ''} alt={lightbox?.alt || ''} isOpen={!!lightbox} onClose={closeLightbox} />
    </LightboxContext.Provider>
  )
}
