import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  
  const scrollToContent = () => {
    const blogSection = document.getElementById('blog')
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image and overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero-school.jpg" 
          alt="EMT Granollers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1221]/95 via-[#0f1221]/85 to-[#141a2e]/80" />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff4d6d]/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff4d6d]/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="w-12 h-[2px] bg-[#ff4d6d]" />
            <span className="text-[#ff4d6d] font-label text-sm tracking-[0.3em] uppercase">
              {t('about.badge')}
            </span>
          </div>

          {/* Massive Name Typography */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">AMINE</span>
              <br />
              <span className="text-[#ff4d6d]">AL FAJJARI</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#cfd3e0] mb-4 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          
          {/* School Badge */}
          <div className="flex items-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-[#9aa0b3] font-label text-sm tracking-wide">
              EMT GRANOLLERS
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-[#ff4d6d] transition-colors animate-fade-up"
        style={{ animationDelay: '0.5s' }}
      >
        <span className="font-label text-xs tracking-[0.2em]">SCROLL</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  )
}
